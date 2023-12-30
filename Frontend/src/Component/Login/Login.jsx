import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginChange = async (e) => {
    setUser((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const loginClick = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post("http://localhost:7001/api/login", {
        ...user,
      });

      if (ress.status == 200) {
        let admintoken = ress.data.token;

        localStorage.setItem("token", JSON.stringify({ admintoken }));
        alert("Successfully loggedin");
        navigate("/Register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="adreg">
      <div className="wrapper">
        <div className="container L">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome Back</h2>
              <p>
                Don't have an account?
                <br />
                Sign up!
              </p>
              <Link to="/admin" className="btn">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form ">
              <h2>Admin Login</h2>
              <form onSubmit={loginClick} className="lform">
                <p>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={loginChange}
                    value={user.username}
                  />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={loginChange}
                    value={user.password}
                  />
                </p>
                <p>
                  <input type="submit" value="Sing In" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
