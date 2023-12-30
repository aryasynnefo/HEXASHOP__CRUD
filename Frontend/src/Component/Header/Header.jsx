import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);
  const userauth = async () => {
    const usertoken = localStorage.getItem("usertoken");
    // console.log("the token is",usertoken);

    // const res=await axios.get("http://localhost:7001/api/user",{headers:{"Authorization":`Bearer ${usertoken}`}})
    axios
      .get("http://localhost:7001/api/user", {
        headers: { Authorization: `Bearer ${usertoken}` },
      })
      .then((res) => {
        setUser(res.data);
        if (res.status == 200) {
          setUser(res.data);
          setState(res.status);
        } else {
          setState(res.status);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        const { msg } = error.response.data;
      });
  };

  const logOut = () => {
    localStorage.removeItem("usertoken");
    setCount(count + 1);
  };

  React.useEffect(() => {
    userauth();
  }, [count]);

  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container header">
          <div className="row mainhead">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}

                <NavLink to="/">
                  {" "}
                  <img src="./images/logo.png" />
                </NavLink>

                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <NavLink to="/" className="active">
                      Home
                    </NavLink>
                  </li>

                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#kids">Kid's</a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>

                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </li>

                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  <li className="usernameli">
                    {state == 200 ? (
                      <div>
                        <span>{user} </span>
                        <button onClick={logOut} className="usernameli">
                          Logout
                        </button>
                      </div>
                    ) : (
                      <NavLink to="/userlogin">
                        <button className="usernameli">Login</button>
                      </NavLink>
                    )}
                    {/* {state==200?<h2> {user} logout</h2>:<h2>login</h2>} */}
                  </li>

                  <li className="crt">
                    <NavLink to="/cart">
                      <BsCartFill />
                    </NavLink>
                  </li>
                </ul>

                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
