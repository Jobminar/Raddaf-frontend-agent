// ChatComponent.js

import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://raddaf-be.onrender.com"); // Use the correct URL for your server

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [sender, setSender] = useState("User1"); // Replace with actual user information
  const [receiver, setReceiver] = useState("User2"); // Replace with actual user information

  useEffect(() => {
    // Fetch initial chat history when the component mounts
    fetchChatHistory();

    // Listen for new chat messages
    socket.on("chat message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      socket.off("chat message");
    };
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch("https://raddaf-be.onrender.com/messages");
      const chatHistory = await response.json();
      setMessages(chatHistory.reverse());
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSendMessage = async () => {
    if (messageInput.trim() !== "") {
      // Send the message to the server
      socket.emit("chat message", { sender, receiver, message: messageInput });

      // Save the message to the backend
      await saveMessageToBackend(sender, receiver, messageInput);

      // Update the local state with the sent message
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender, receiver, message: messageInput },
      ]);

      // Clear the message input field
      setMessageInput("");
    }
  };

  const saveMessageToBackend = async (sender, receiver, message) => {
    try {
      await fetch("https://raddaf-be.onrender.com/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender, receiver, message }),
      });
    } catch (error) {
      console.error("Error saving message to backend:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Chat with {receiver}</h2>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;