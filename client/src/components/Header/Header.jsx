import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/agent-logo.png";
import "./Header.css";
import notification from "../Images/notification.png";
import profile from "../Images/profile.png";

const Header = ({children} ) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
  
    navigate("/login");
  };

  return (
    <div>
    
    <div className="header-con">
  
      
      <div className="logo-agent">
        <img src={logo} alt="agentlogog" />
      </div>
      <div className="agent-main">
        <div className="notification">
          <img src={notification} alt="notification" />
        </div>
        <div className="profile" onClick={handleProfileClick}>
          <img src={profile} alt="profile" />
        </div>
        <div className="agent-details">
          <h1>AGENT NAME</h1>
          <p>Agent ID: 545943</p>
        </div>
      </div>
     </div>
     {children}
    </div>
  );
};

export default Header;
