import React, { useState } from 'react'
import "./Adminreg.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Adminreg = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:'',
    email:'',
    password:''
  })

  const onHandlechange=async(e)=>{
    setData((pre)=>{
    
  
        return {...pre,[e.target.name]:e.target.value}
    })
  }

  const onHandleclick=async(e)=>{
    e.preventDefault();
    
   
    try {
      
    const ress=await axios.post("http://localhost:7001/api/register",{...data})
    if(ress.status==201)
    {
      alert("Data added") 
      navigate('/login')
    }
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className='main'>
        <h1 className="head">Admin Registration</h1>
    <form id="registrationForm"  className="form" onSubmit={onHandleclick} >
       <div className="div1">
        <label for="username">Username:</label>
        <input type="text"  name="username" onChange={onHandlechange}
        value={data.username}/>
       </div>

       <div className="div1">
        <label for="email" className="head">Email:</label >
            <input type="text" name="email" className="email" onChange={onHandlechange} value={data.email}  />
       </div>

       <div className="div1">
        <label for="password">Password:</label>
        <input type="password"  name="password" onChange={onHandlechange}
        value={data.password}/>
       </div>

       

      <Link to="/login"><button >Register</button></Link>
      <button >Register</button>
      </form>
     </div>

  )
}

export default Adminreg