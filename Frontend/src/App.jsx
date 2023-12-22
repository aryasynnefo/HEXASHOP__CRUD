import { useState } from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Adminreg from "./Component/Admin_Register/Adminreg";
import Detail from "./Component/Detail/Detail";
import Success from "./Component/Success/Success";
import Cart from "./Component/Cart/Cart";
import User_login from "./Component/User_login/User_login";
import User_register from "./Component/User_register/User_register";
import About from "./Component/About/About";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Banner} />
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
          <Route path="/admin" Component={Adminreg} />
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/success" Component={Success} />
          <Route path="/userlogin" Component={User_login} />
          <Route path="/userregister" Component={User_register} />
          <Route path="/cart" Component={Cart} />
          <Route path="/about" Component={About} /> 
       
          
          


        


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
