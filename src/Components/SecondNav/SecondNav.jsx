import React, { Component } from "react";
import adidasLogo from "../../images/adidas.png";

export default class SecondNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarNav2"
          >
            <a className="navbar-brand" href="#">
              <img src={adidasLogo} width="75" alt="" />
            </a>
            <ul className="navbar-nav align-self-end">
              <li className="nav-item position-relative">
                <a
                  onClick={this.props.changeStatus}
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  <i class="fa-sharp fa-solid fa-cart-plus mx-1"></i>Cart
                </a>
                <span className="cart-badge">{this.props.productsNum}</span>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  <i class="fa-sharp fa-solid fa-list mx-1"></i>Wish List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  <i class="fa-solid fa-user mx-1"></i>Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
