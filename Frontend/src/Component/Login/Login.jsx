import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginChange = async (e) => {
    setUser((pre) => {
      console.log(e.target.value);

      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const loginClick = async (e) => {
    e.preventDefault();
    // console.log({...user});
    try {
      const ress = await axios.post("http://localhost:7001/api/login", {
        ...user,
      });
      console.log(ress.data.token);

      if (ress.status == 200) {
        let admintoken = ress.data.token;
        console.log(admintoken);
        localStorage.setItem("token", JSON.stringify({ admintoken }));
        alert("Successfully loggedin");
        navigate("/Register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="head">Admin Login</h1>
      <form id="registrationForm" className="form" onSubmit={loginClick}>
        <div className="div1">
          <label for="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={loginChange}
            value={user.username}
          />
        </div>

        <div className="div1">
          <label for="username">Password:</label>
          <input
            type="password"
            name="password"
            onChange={loginChange}
            value={user.password}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
