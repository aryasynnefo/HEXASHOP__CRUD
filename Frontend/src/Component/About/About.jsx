import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div>
        <img src="./images/abt.jpg" alt="" className="about" />
        <h4 className="inner-contents">ABOUT US</h4>
      </div>
      <div className="container">
        <div className="abtflex">
          <img src="./images/abt1.jpg" alt="" className="sale" />
          <div className="text">
            <h1>About Us & Our Skills</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              repellat aut laudantium officiis inventore fugiat
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Possimus, unde labore illo, minus autem placeat repellendus
              perferendis delectus ipsum doloremque ex magni hic cum doloribus
              commodi distinctio quasi, nobis debitis! lor
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At natus
              eius dolorem aut et beatae atque. Fuga eum officiis
              consectetur?laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="about">
        <h1>Our Amazing Team</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="grid">
        <div className="g1">
          <img src="./images/team1.jpg" alt="" />
          <h5>Preethi Ranga</h5>
          <p>Product Caretaker</p>
        </div>
        <div className="g1">
          <img src="./images/team2.jpg" alt="" />
          <h5>Ragnar Lodbrok</h5>
          <p>Product Caretaker</p>
        </div>
        <div className="g1">
          <img src="./images/team3.jpg" alt="" />
          <h5>Hijosh Stephen</h5>
          <p>Product Caretaker</p>
        </div>
      </div>
      <div className="about">
        <h1>Our Services</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Synther Vaporware</h5>
            <p className="card-text abt">
              Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
              eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
            </p>
            <img
              src="./images/service-01.jpg"
              className="card-img-top"
              alt=""
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Locavore Squidward</h5>
            <p className="card-text abt">
              Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
              eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
            </p>
            <img
              src="./images/service-02.jpg"
              className="card-img-top"
              alt=""
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Health Gothfam</h5>
            <p className="card-text abt">
              Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
              eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
            </p>
            <img
              src="./images/service-03.jpg"
              className="card-img-top"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="subscribe">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="section-heading">
                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div class="row">
                  <div class="col-lg-5">
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
                  <div class="col-lg-5">
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
                  <div class="col-lg-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        class="main-dark-button"
                      >
                        <i class="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="col-6">
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
                <div class="col-6">
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

export default About;
