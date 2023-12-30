import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]);
  // const { usertoken } = JSON.parse(localStorage.getItem("usertoken"));
  const usertoken = localStorage.getItem("usertoken");
  const [count, setCount] = useState(0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalDiscount = 10;
  const deliveryCharges = 100;

  const totalAmount = totalPrice - totalDiscount + deliveryCharges;

  // ****************************display items in cart***********************
  const displayCart = async () => {
    const res = await axios.get("http://localhost:7001/api/displaycart", {
      headers: { Authorization: `Bearer ${usertoken}` },
    });

    setCart(res.data);
  };

  // ****************************delete items in cart***********************
  const removeItem = async (id) => {
    try {
      axios
        .delete(`http://localhost:7001/api/deleteitem/${id}`)

        .then((crt) => {
          setCount(count + 1);
          alert("click ok to remove the product from your cart");
        });
    } catch (error) {
      console.log(error);
    }
  };

  // ****************************place order***********************

  const placeOrder = async () => {
    try {
      const res = await axios.delete("http://localhost:7001/api/order", {
        headers: { Authorization: `Bearer ${usertoken}` },
      });
      setCart([]);
      setCount(0);
    } catch (error) {
      console.log(error);
    }
  };
  // -------------------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    displayCart();
  }, [count]);

  return (
    <>
      <div className="cart-container">
        <ul>
          {cart.map((data) => (
            <li>
              <div className="cart-item">
                <img src={data.image} alt="" className="cartimg" />

                <div className="desc">
                  <li>
                    <p>{data.product_name}</p>
                  </li>
                  <li>
                    <p>${data.price}</p>
                  </li>
                  <li>
                    <p>Quantity:{data.quantity}</p>
                  </li>
                  <button
                    onClick={() => {
                      removeItem(data._id);
                    }}
                    className="remove"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="slip">
          <div className="cartslip">
            <h4>PRICE DETAILS:</h4>
            <p>Price : ${totalPrice.toFixed(2)}</p>
            <p>Discount : -${totalDiscount.toFixed(2)}</p>
            <p>Delivery Charges :${deliveryCharges.toFixed(2)}</p>
            <hr className="line" />
            <h3>Total Amount : ${totalAmount.toFixed(2)}</h3>
            <hr className="line" />
            <Link to="/success">
              <button className="order" onClick={placeOrder}>
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
