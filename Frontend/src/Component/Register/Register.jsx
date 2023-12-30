import React, { useEffect, useState } from "react";
import "./Register.scss";
import axios from "axios";
function Register() {
  const [prod, setProd] = useState({
    product_name: "",
    brand: "",
    price: "",
    quantity: "",
    category: "",
    forcategory: "",
    image: "",
  });

  const onHandlechange = (e) => {
    setProd((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onHandleClick = async (e) => {
    e.preventDefault();

    const img = await convertToBase64(e.target[6].files[0]);

    try {
      const ress = await axios.post("http://localhost:7001/api/add", {
        ...prod,
        image: img,
      });
      if (ress.status == 201) {
        alert("Data added");
      }
    } catch (error) {
      alert("error");
    }
  };
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject(error);
      };
    });
  }
  const load = () => {
    const admintoken = JSON.parse(localStorage.getItem("token"));

    const res = axios.get("http://localhost:7001/api/home", {
      headers: { Authorization: `Bearer ${admintoken.token}` },
    });
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="bdy">
      <div className="container Parent">
        <br /> <br />
        <div className="row start">
          <h3 className="heading-block c1">
            Registration Form
            <br />
          </h3>
          <form novalidate onSubmit={onHandleClick}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Product</label>
                <input
                  type="text"
                  className="form-control"
                  value={prod.product_name}
                  name="product_name"
                  onChange={onHandlechange}
                />
              </div>

              <div className="form-group col-md-6">
                <label>Brand</label>
                <input
                  type="text"
                  className="form-control"
                  value={prod.brand}
                  name="brand"
                  onChange={onHandlechange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  value={prod.price}
                  name="price"
                  onChange={onHandlechange}
                />
              </div>

              <div className="form-group col-md-6">
                <label>For:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={onHandlechange}
                  id="birthdayDate"
                  value={prod.forcategory}
                  name="forcategory"
                  placeholder="Men,Women,Kid"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Quantity</label>
                <input
                  type="text"
                  id="qty"
                  value={prod.quantity}
                  name="quantity"
                  className="form-control"
                  onChange={onHandlechange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Category</label>
                <input
                  type="text"
                  id="cat"
                  value={prod.category}
                  name="category"
                  className="form-control"
                  onChange={onHandlechange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Image</label>
                <br />

                <input type="file" name="image" />
              </div>
            </div>

            <div className="form-row subdiv">
              <button className="btn sbtn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
