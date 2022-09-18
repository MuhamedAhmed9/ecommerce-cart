import React, { Component } from "react";

export default class Cart extends Component {
  getTotalPrice = () => {
    let total = 0;
    this.props.products.forEach((p) => {
      total += p.price * p.quantity;
    });
    return total;
  };
  render() {
    return (
      <div className="cart-container">
        <div className="sidebar position-absolute end-0 bg-white  py-5 px-4">
          <div className="cart-header">
            <h3 className="text-center secondary-color">Shopping Cart</h3>
            <span onClick={this.props.changeStatus} className="close-cart">
              <i className="fas fa-window-close fs-2"></i>
            </span>
            <h5 className="my-4 fw-bold">Cart Summary</h5>
            <div className="cart-items">
              {this.props.products.map((p, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex border border-3 position-relative"
                  >
                    <div className="w-25">
                      <img src={`${p.photo}`} className="w-100" alt="" />
                    </div>
                    <div className="w-75">
                      <span className="fw-bold d-block">
                        {p.name.slice(0, 50)}
                      </span>
                      <span className="text-muted d-block">{p.price}</span>
                      <span className="fw-bold d-block">
                        Quantitfy : {p.quantity}
                      </span>
                    </div>
                    <span
                      className="removeItem bg-warning fw-bold d-inline-block rounded-pill position-absolute px-2 py-1 bottom-0 end-0"
                      onClick={() => this.props.filterProducts(p.id)}
                    >
                      Remove
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <h5 className="fw-bold my-4">Cart Total</h5>
              <span className="fw-bold">Total Price :</span>
              <span className="fw-bold">{this.getTotalPrice()}</span>
              <div className="cart d-flex my-3">
                <button className="btn bg-secondary-color rounded-pill py-2 px-3 fw-bold mx-2">
                  Review Cart
                </button>
                <button className="btn bg-primary-color rounded-pill py-2 px-2 fw-bold">
                  Complete Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
