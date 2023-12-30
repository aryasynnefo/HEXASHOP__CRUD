// Detail.js

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Detail.css"; // Import the updated CSS file

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState("");
  const [quantity, setQuantity] = useState(1);
  const usertoken = localStorage.getItem("usertoken");

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const productDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7001/api/product/${id}`,
        {
          headers: { Authorization: `Bearer ${usertoken}` },
        }
      );
      setProduct(response.data.data);
      setUser(response.data.username);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  const addToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:7001/api/addtocart/${id}`,
        {
          ...product,
          quantity: quantity,
          user: user,
        },
        {
          headers: { Authorization: `Bearer ${usertoken}` },
        }
      );

      if (response.status === 200) {
        navigate("/cart");
      }
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  useEffect(() => {
    productDetail();
  }, [quantity]);

  return (
    <div className="container">
      <div className="image">
        <img src={product.image} alt="no image" />
      </div>
      <div className="product-details">
        <div className="name">
          <h1>{product.product_name}</h1>
          <div className="offer">
            <h3>${product.price}</h3>
            <h6>
              <s>1,999/-</s>
            </h6>
            <h6>70% off</h6>
          </div>
          <div>
            <h4>Description:</h4>
            <ul>
              <li className="list">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam quas esse sequi soluta, dolorem quaerat mollitia
                debitis atque quis maxime reprehenderit hic optio. Cumque ipsum,
                magni sequi odio recusandae cupiditate.
              </li>
              <li className="list">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam quas esse sequi soluta, dolorem quaerat mollitia
                debitis atque quis maxime reprehenderit hic opio.
              </li>
            </ul>
          </div>
          <div className="quantity-section">
            <p>Quantity:</p>
            <button className="quantity-button" onClick={decrementQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button className="quantity-button" onClick={incrementQuantity}>
              +
            </button>
          </div>
        </div>
        <div className="btns">
          <Link to="/success">
            <button className="buy-now-button">BUY NOW</button>
          </Link>
          <Link to={`/cart`}>
            <button className="add-to-cart-button" onClick={addToCart}>
              ADD TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
