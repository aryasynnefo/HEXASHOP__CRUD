import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
 const navigate=useNavigate()
  const [product, setProduct] = useState([]);
  const [user,setUser]=useState("")
  const [quantity,setQuatity]=useState(1);
  const {usertoken}=JSON.parse(localStorage.getItem("usertoken"))
  const incrementQuantity=()=>{
    setQuatity(quantity+1);
  }
  const decrementQuantity=()=>{
    if(quantity==1)
    {
      setQuatity(1)
    }
    else{
      setQuatity(quantity-1)  
    }
  }
 
  const productDetail = async () => {
  //  console.log("token is",usertoken);
    axios.get(`http://localhost:7001/api/product/${id}`,{headers:{"Authorization":`Bearer ${usertoken}`}})
    .then((prod) => {
    //  console.log('prod',prod);
      setProduct(prod.data.data);
      setUser(prod.data.username);
    });
  };
const addToCart=async()=>{
  const res=await axios.post(`http://localhost:7001/api/addtocart/${id}`,{...product,quantity:quantity,user:user},{headers: { Authorization: `Bearer ${usertoken}` },
})
 
  if(res.status==200)
  {
    // alert("item added to cart")
    navigate('/cart')
  }
  console.log(res);
}

  useEffect(() => {
    productDetail();
  }, [quantity]);
  
// console.log(product);
// console.log('username',user);
  return (
    <div className="container">
      <div className="image">
        <img src={product.image} alt="no image" />
        <div className="name">
          <h1>{product.product_name}</h1>
          <h6>Special Price</h6>
          <div className="offer">
            <h3>{product.price}</h3>
            <h6>
              <s>1,999/-</s>
            </h6>
            <h6>70% off</h6>
          </div>
          <div>
                <h4>Description:</h4>
                <ul>
                        <li className="list">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas esse sequi soluta, dolorem quaerat mollitia debitis atque quis maxime reprehenderit hic optio. Cumque ipsum, magni sequi odio recusandae cupiditate.</li>
                        <li className="list">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas esse sequi soluta, dolorem quaerat mollitia debitis atque quis maxime reprehenderit hic opio.</li>
                </ul>
          </div>
          <div className="qua-">
            <p>Quantity:</p>
            <button className="quantity1" onClick={decrementQuantity}>-</button> 
            <span>{quantity}</span>
            <button className="quantity" onClick={incrementQuantity}>+</button>
          </div>
         
        </div>
        
      </div>
      <div className="btns">
            <Link to="/success">
              <button>BUY NOW</button>
            </Link>
            <Link to={`/cart`}>
              <button onClick={addToCart}>ADD TO CART</button>
            </Link>
          </div>
    </div>
  );
};

export default Detail;




















