import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-muted py-4">
        <div className="container footer">
          <div className="row border border-end-0 border-top-0 border-start-0">
            <div className="col-md-6 p-3">
              <h3 className="h1 fw-bold primary-color">Yeshtery</h3>
              <span className="text-muted my-2 d-block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                dolor saepe molestias voluptas dicta ad harum illo! Laudantium,
                et repellendus?
              </span>
              <span className="text-muted my-2 d-block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                dolor saepe molestias voluptas dicta ad harum illo! Laudantium,
                et repellendus?
              </span>
              <span className="text-muted my-2 d-block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                dolor saepe molestias voluptas dicta ad harum illo! Laudantium,
                et repellendus?
              </span>
            </div>
            <div className="col-md-6 p-3">
              <h4>Subscribe to our news Letter</h4>
              <form className="d-flex position-relative">
                <input
                  type="text"
                  className="form-control rounded-pill p-2"
                  placeholder="Enter your email"
                />
                <button className="btn bg-primary-color rounded-pill position-absolute end-0">
                  Subscribe
                </button>
              </form>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="my-2">
                      <a href="#" className="text-white">
                        Home
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#" className="text-white">
                        About
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#" className="text-white">
                        Contact
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#" className="text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#" className="text-white">
                        Our Company
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="social-links">
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <a href="#" className="text-white">
                          <i className="fab fa-facebook-f me-2"></i>Facebook
                        </a>
                      </li>
                      <li className="my-2">
                        <a href="#" className="text-white">
                          <i className="fab fa-twitter me-2"></i>Twitter
                        </a>
                      </li>
                      <li className="my-2">
                        <a href="#" className="text-white">
                          <i className="fab fa-instagram me-2"></i>Instagram
                        </a>
                      </li>
                      <li className="my-2">
                        <a href="#" className="text-white">
                          <i className="fab fa-linkedin-in me-2"></i>Linked In
                        </a>
                      </li>
                      <li className="my-2">
                        <a href="#" className="text-white">
                          <i className="fab fa-youtube me-2"></i>YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between py-3">
            <p className="text-white my-2">
              &copy; 2021 Yeshtery. All Rights Reserved.
            </p>
            <div className="footer-imgs">
              <img
                src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png"
                width="50"
              />
              <img
                src="https://d28wu8o6itv89t.cloudfront.net/images/Mastercarddebitcardjpg-1596701306533.jpeg"
                alt=""
                width="50"
                className="mx-2"
              />
              <img
                src="https://www.visa.co.in/dam/VCOM/regional/na/us/partner-with-us/images/visa-card-business-chip-724x456.jpg"
                alt=""
                width="50"
                className="mx-2"
              />
            </div>
            <p className="text-white my-2">
              Designed by{" "}
              <a className="text-white" href="#">
                Yeshtery
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
