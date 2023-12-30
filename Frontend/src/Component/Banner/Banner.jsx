import React, { useEffect, useState } from "react";
import "./Banner.css";
import "./css/lightbox.css";
import "./css/font-awesome.css";
import "./css/owl-carousel.css";
import "./css/flex-slider.css";
import "./css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = () => {
  const [item, setItem] = useState([]);
  const displayItem = async () => {
    const res = await axios.get("http://localhost:7001/api/display");
    const data = res.data;
    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setItem(data);
    }
  };

  useEffect(() => {
    displayItem();
  }, []);
  return (
    <div>
      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>
                      Awesome, clean &amp; classy clothings for men,women and
                      kids
                    </span>
                  </div>
                  <img src="./images/left-banner-image.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>

                        <img src="./images/baner-right-image-01.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>

                        <img src="./images/baner-right-image-02.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>

                        <img src="./images/baner-right-image-03.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>

                        <img src="./images/baner-right-image-04.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ...................MENS...................... */}
      <div className="mens">
        <h1>Men's Latest</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>

      <div className="container crd">
        {item.map((d) => {
          if (d.forcategory === "men") {
            return (
              <>
                <Link to={`/detail/${d._id}`}>
                  <div className="card">
                    <img src={d.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{d.product_name}</p>
                      <p className="card-sub">${d.price}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          }
        })}
      </div>
      {/* ------------------------------------WOMEN--------------------------------------- */}
      <div className="mens">
        <h1>Women's Latest</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="container crd">
        {item.map((d) => {
          if (d.forcategory === "women") {
            return (
              <>
                <Link to={`/detail/${d._id}`}>
                  <div className="card">
                    <img src={d.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{d.product_name}</p>
                      <p className="card-sub">${d.price}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          }
        })}
      </div>

      {/* ------------------------------------KIDS--------------------------------------- */}

      <div className="mens">
        <h1>Kid's Latest</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="container crd">
        {item.map((d) => {
          if (d.forcategory === "kid") {
            return (
              <>
                <Link to={`/detail/${d._id}`}>
                  <div className="card">
                    <img src={d.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{d.product_name}</p>
                      <p className="card-sub">${d.price}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          }
        })}
      </div>

      {/* ---------------------------------------EXPLORE----------------------------- */}

      <section className="section" id="explore">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <h2>Explore Our Products</h2>
                <span>
                  You are allowed to use this HexaShop HTML CSS template. You
                  can feel free to modify or edit this layout. You can convert
                  this template as any kind of ecommerce CMS theme as you wish.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    You are not allowed to redistribute this template ZIP file
                    on any other website.
                  </p>
                </div>
                <p>
                  There are 5 pages included in this HexaShop Template and we
                  are providing it to you for absolutely free of charge at our
                  TemplateMo website. There are web development costs for us.
                </p>
                <p>
                  If this template is beneficial for your website or business,
                  please kindly{" "}
                  <a
                    rel="nofollow"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    support us
                  </a>{" "}
                  a little via PayPal. Please also tell your friends about our
                  great website. Thank you.
                </p>
                <div className="main-border-button">
                  <a href="products.html">Discover More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="leather">
                      <h4>Leather Bags</h4>
                      <span>Latest Collection</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="first-image">
                      <img src="./images/explore-image-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="second-image">
                      <img src="./images/explore-image-02.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="types">
                      <h4>Different Types</h4>
                      <span>Over 304 Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------SUBSCRIBE-------------------------------- */}

      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading">
                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-dark-button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Store Location:
                      <br />
                      <span>Sunny Isles Beach, FL 33160, United States</span>
                    </li>
                    <li>
                      Phone:
                      <br />
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      Office Location:
                      <br />
                      <span>North Miami Beach</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Work Hours:
                      <br />
                      <span>07:30 AM - 9:30 PM Daily</span>
                    </li>
                    <li>
                      Email:
                      <br />
                      <span>info@company.com</span>
                    </li>
                    <li>
                      Social Media:
                      <br />
                      <span>
                        <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                        <a href="#">Behance</a>, <a href="#">Linkedin</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
