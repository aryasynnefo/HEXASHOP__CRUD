import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
function Register() {
  const [prod,setProd]=useState({
    product_name:'',
    brand:'',
    price:'',
    quantity:'',
    category:'',
    forcategory:'',
    image:''
   
  })

const onHandlechange=(e)=>{
  setProd((pre)=>{
    // console.log(e.target.value);

      return {...pre,[e.target.name]:e.target.value}
  })
}

const onHandleClick= async (e)=>{
  // console.log(e);
  e.preventDefault();
console.log(e.target[6].files[0]);
  const img=await convertToBase64(e.target[6].files[0]);
  console.log(img);
    // setProd((pre)=>({...pre,image:img}))
  try {
    console.log({...prod});
    const ress=await axios.post("http://localhost:7001/api/add",{...prod,image:img})
  if(ress.status==201)
{
  alert("Data added") 
}
} catch (error) {
      alert("error")
}
  

}
function convertToBase64(file){
  return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
          resolve(fileReader.result);
      }
      fileReader.onerror=()=>{
          reject(error);
      }
  })
}
const load=()=>{
const admintoken=JSON.parse(localStorage.getItem("token"))
// console.log(admintoken.token);
const res=axios.get("http://localhost:7001/api/home",{headers:{"Authorization":`Bearer ${admintoken.token}`}})
}
useEffect(()=>{
  load()
},[])
  return (
    <div>
      <section className="vh-100 gradient-custom ">
        <div className="container py-5 h-100 form">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 regfrm">
                  Registration Form
                </h3>
                <form onSubmit={onHandleClick}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={prod.product_name} name="product_name"
                          className="form-control form-control-lg"  onChange={onHandlechange}
                       />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label">
                          Brand
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={prod.brand} name="brand"
                          className="form-control form-control-lg" onChange={onHandlechange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label className="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"  onChange={onHandlechange}
                          id="birthdayDate"
                          value={prod.price} name="price"
                        />
                      </div>
                      
                    </div>
                   
                    <div className="col-md-6 mb-4 ">
                    <label className="form-label">
                          For:
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"  onChange={onHandlechange}
                          id="birthdayDate"
                          value={prod.forcategory} name="forcategory" placeholder="Men,Women,Kid"
                        />
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label">
                          Quantity
                        </label>
                        <input
                          type="text"
                          id="qty"
                          value={prod.quantity} name="quantity"
                          className="form-control form-control-lg"  onChange={onHandlechange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="row">
                        <div className="col-12 category">
                          <label className="form-label">
                            Category
                          </label>
                          <input
                            type="text"
                            id="cat"
                            value={prod.category} name="category"
                            className="form-control form-control-lg"  onChange={onHandlechange}
                          />
                        </div>
                        
                        
                        
                      </div>
                      
                    </div>
                    
                    
                  </div>
                 
     <div className="col-md-6 mb-4 ">
    
    <label className="regfrm">Upload Image:</label>
    <input type="file" className="regfrm"  id="exampleFormControlFile1"
    name="image"  />

  </div>
  
                 
                  <div className="mt-4 pt-2 btn"> 
                    <input
                      className="btn btn-light btn-lg"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
