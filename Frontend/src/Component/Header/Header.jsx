 import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsCartFill } from "react-icons/bs";


const Header = () => {
const [user,setUser]=useState("")
  const userauth=async()=>{
  const {usertoken}=JSON.parse(localStorage.getItem("usertoken"))
  // console.log("the token is",usertoken);
    const res=await axios.get("http://localhost:7001/api/user",{headers:{"Authorization":`Bearer ${usertoken}`}})
    
    //  console.log("usersasas",res.data);
     setUser(res.data)
  }

  // const logOut=()=>{
  //   // localStorage.removeItem("token");
  //   localStorage.clear();
  //   setCnt(cnt+1)
  // }
React.useEffect(() => {
  
  userauth();

}, []);


  return (
    <div >
      <header className="header-area header-sticky" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
               
               <NavLink to="/"> <img src="./images/logo.png" /></NavLink>
               
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
                      {/* <li>
                        <a href="products.html">Products</a>
                      </li>
                      <li>
                        <a href="single-product.html">Single Product</a>
                      </li> */}
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      
                     
                    </ul>
                  </li>
                  {/* <li className="submenu">
                    <a href="javascript:;">Features</a>
                    <ul>
                      <li>
                        <a href="#">Features Page 1</a>
                      </li>
                      <li>
                        <a href="#">Features Page 2</a>
                      </li>
                      <li>
                        <a href="#">Features Page 3</a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/page/4"
                          target="_blank"
                        >
                          Template Page 4
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  {{user}?<span>{user} </span>:<NavLink to="/userlogin" ><button className="loginbtn">Login</button></NavLink>}
                    
                   
                    <li >
                    <NavLink to="/cart"><BsCartFill/></NavLink>
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
