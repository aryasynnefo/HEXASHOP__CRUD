import React, { useState, useEffect } from "react";
import "./Userlogin.css";
import { Link, json } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User_login = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    username: "",
    password: "",
  });

  const onHandleChange = async (e) => {
    setCustomer((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const userClick = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post("http://localhost:7001/api/userlogin", {
        ...customer,
      });

      if (ress.status == 200) {
        let { usertoken } = ress.data;

        localStorage.setItem("usertoken", usertoken);
        alert("Successfully loggedin");
        // localStorage.setItem("teken",JSON.stringify(token));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={userClick}>
          <div className="user-box">
            <input
              type="text"
              name="username"
              onChange={onHandleChange}
              value={customer.username}
            />
            <label>Username</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              name="password"
              onChange={onHandleChange}
              value={customer.password}
            />
            <label>Password</label>
          </div>
          <div className="signup">
            {/* <Link to="/"> */}
            <button className="reg">SUBMIT</button>
            {/* </Link> */}
          </div>
          <div className="signup">
            <h5>New User? Create an account</h5>
            <Link to="/userregister">
              <button className="regbtn">REGISTER</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_login;
