import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary-color">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Yeshtery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarNav"
          >
            <span>
              Valentine's Day Offer! Buy Two Get One Free{" "}
              <a className="mx-2 text-black fw-bold" href="">
                <i class="fa-solid fa-cart-shopping mx-1"></i>Shop Now
              </a>
            </span>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <i class="fa-solid fa-phone mx-1"></i>Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  <i class="fa-solid fa-location-dot mx-1"></i>Track Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  <i class="fa-solid fa-store mx-1"></i>Find A Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
