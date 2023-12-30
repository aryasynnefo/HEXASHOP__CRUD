import React, { useState } from "react";
import "./Adminreg.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Adminreg = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onHandlechange = async (e) => {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onHandleclick = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post("http://localhost:7001/api/register", {
        ...data,
      });
      if (ress.status == 201) {
        alert("Data added");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="headersa">
        <h1>Admin registration form</h1>
      </div>

      <form id="registrationForm" className="form R" onSubmit={onHandleclick}>
        <label for="text" className="head">
          Username:
        </label>
        <input
          type="text"
          name="username"
          className="email"
          onChange={onHandlechange}
          value={data.username}
        />
        <br />
        <label for="email" className="head">
          Email:
        </label>
        <input
          type="text"
          name="email"
          className="email"
          onChange={onHandlechange}
          value={data.email}
        />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={onHandlechange}
          value={data.password}
        />
        <br />
        <Link to="/login">
          <button className="Rbtn">Register</button>
        </Link>
      </form>
    </>
  );
};

export default Adminreg;
