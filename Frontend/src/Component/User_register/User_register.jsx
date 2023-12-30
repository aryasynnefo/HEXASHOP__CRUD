import React, { useEffect, useState } from 'react'
import "./User_register.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Adminreg = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    address:'',
    phno:''
  })

  const onHandlechange=async(e)=>{
    setData((pre)=>{
    
  
        return {...pre,[e.target.name]:e.target.value}
    })
  }

  const onHandleclick=async(e)=>{
    e.preventDefault();
    
   
    try {
      
    const ress=await axios.post("http://localhost:7001/api/userreg",{...data})
    if(ress.status==201)
    {
      alert("Data added") 
      navigate('/userlogin')
    }
    
    } catch (error) {
        console.log(error);
    }
  }
  return (
 <div>
    <div className='main'>
    <div className="login-box ">
  <h2>Registration Form</h2>
  <form onSubmit={onHandleclick}>
    <div className="user-box">
      <input type="text"  name="username" onChange={onHandlechange}
        value={data.username}/>
      <label>Username</label>
    </div>
    <div className="user-box">
    <input type="text" name="email" classNameName="email" onChange={onHandlechange} value={data.email}  />
      <label>Email</label>
    </div>
    <div className="user-box">
    <input type="password"  name="password" onChange={onHandlechange}
       value={data.password}/>
      <label>Password</label>
    </div>
    
    <div className="user-box">
    <input type="text"  name="address" onChange={onHandlechange}
       value={data.address}/>
      <label>Address</label>
    </div>
    <div className="user-box">
    <input type="text"  name="phno" onChange={onHandlechange}
       value={data.phno}/>
      <label>Phone Number</label>
    </div>
    <div className='signup'>
   <button className='reg'>Submit</button>
    </div>
    
  </form>
</div>
    </div>
    </div>

  )
}

export default Adminreg