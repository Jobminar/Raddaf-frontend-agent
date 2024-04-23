import React, { useContext, useState } from "react";
import { TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import "../login/login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Data } from "../../Total";


const Login = () => {

const {name}=useContext(Data)

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://raddaf-be.onrender.com/agent-auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        Swal.fire({
          icon: "success",
          title: "Login Successful ",
          text: "Login has been successful",
        });

        // Set user data in session storage
        sessionStorage.setItem("userData", JSON.stringify(data.userData));

        // Handle successful login, e.g., redirect to another page
        navigate("/");
      } else {
        console.error("Login failed:", data.error);
        // Handle failed login, e.g., display an error message
        Swal.fire({
          icon: "error",
          title: "Failed to Login",
          text: data.error,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Login",
        text: "Login has been failed",
      });
    }

    console.log("Login clicked", formData);
  };

  return (
    <div className="main-divs">
      <form className="form-contain" onSubmit={handleSubmit}>
        <h2>Agent Login Form</h2>
        <TextField
          variant="filled"
          type="email"
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          variant="filled"
          type="password"
          name="password"
          label="Password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleCheckboxChange}
            />
          }
          label="Remember Me"
        />
        <button type="submit" className="button-admin">
          Login
        </button>
        <div className="icons-mui">
          <p>Not Account ?</p>
          <p style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
            Register Now
          </p>
         
        </div>
      </form>
      {name}
    </div>
  );
};

export default Login;
