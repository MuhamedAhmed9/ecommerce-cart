import React, { Component } from "react";
import adidas from "../../images/adidas.png";

export default class DisplayProduct extends Component {
  state = {
    photo:
      "https://api.yeshtery.com/v1/yeshtery/files/31/gf0198-4-apparel-zip-turntable-3d-8-white-9768d30beeec4160932b3eb4ef2102f0.jpg",
    quantity: 1,
  };

  changePhoto = (e) => {
    this.setState({ photo: e.target.src });
  };

  changeQuantity = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "-") {
      if (this.state.quantity > 1) {
        this.setState({ quantity: this.state.quantity - 1 });
      }
    } else {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };

  sendproduct = (e) => {
    e.preventDefault();
    const product = {
      id: 2,
      photo: "",
      name: "",
      quantity: "",
      price: "",
    };
    const price = document.getElementById("price");
    const name = document.getElementById("name");
    product.quantity = this.state.quantity;
    product.photo = this.state.photo;
    product.price = price.innerHTML;
    product.name = name.innerHTML;
    this.props.addProduct(product);
  };

  render() {
    return (
      <div>
        <div className="container display-product">
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={this.state.photo} alt="" />
              <div className="w-100">
                <img
                  onClick={this.changePhoto}
                  className="w-25"
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/gf0198-4-apparel-zip-turntable-3d-8-white-9768d30beeec4160932b3eb4ef2102f0.jpg"
                  alt=""
                />
                <img
                  onClick={this.changePhoto}
                  className="w-25"
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/gf0198-4-apparel-zip-turntable-3d-7-white-76eb26cbabc942d0b0837c50ac7db5f9.jpg"
                  alt=""
                />
                <img
                  onClick={this.changePhoto}
                  className="w-25"
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/gf0198-4-apparel-zip-turntable-3d-6-white-54534fa3091843cdb7706e55af80ba59.jpg"
                  alt=""
                />
                <img
                  onClick={this.changePhoto}
                  className="w-25"
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/gf0198-4-apparel-zip-turntable-3d-8-white-9768d30beeec4160932b3eb4ef2102f0.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 py-4">
              <div className="details">
                <img className="my-3" src={adidas} width="50" alt="" />
                <h4 id="name" className="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia blanditiis harum aliquid reprehenderit
                </h4>
                <span className="text-muted">Men</span>
                <div className="rate">
                  <i className="fa fa-star primary-color"></i>
                  <i className="fa fa-star primary-color"></i>
                  <i className="fa fa-star primary-color"></i>
                  <i className="fa fa-star primary-color"></i>
                  <i className="fa fa-star text-muted"></i>
                  <span className="mx-3 fw-bold">4.5 out of 5</span>
                  <span className="mx-1 fw-bold text-muted">22 rate</span>
                </div>
                <div className="price">
                  <span id="price" className="fw-bold fs-4">
                    100
                  </span>
                  <span className="fw-bold">$</span>
                  <span className="text-muted mx-3 fs-6">
                    <del>$200</del>
                  </span>
                  <span className="text-success fw-bold fs-6">50% off</span>
                </div>
              </div>
              <div className="size border border-end-0 border-start-0 border-top-0 border-bottom-3">
                <h5 className="fw-bold my-3">Size</h5>
                <ul className="d-flex justify-content-between">
                  <li className="fw-bold">small</li>
                  <li className="fw-bold">medium</li>
                  <li className="fw-bold muted-circle">large</li>
                  <li className="fw-bold">xlarge</li>
                  <li className="fw-bold">xxLarge</li>
                </ul>
              </div>
              <div className="color border border-end-0 border-start-0 border-top-0 border-bottom-3">
                <h5 className="fw-bold my-3">Color</h5>
                <ul className="d-flex flex-start">
                  <li className="fw-bold bg-primary"></li>
                  <li className="fw-bold bg-danger"></li>
                </ul>
              </div>
              <div className="quantity py-3 my-2">
                <h5 className="fw-bold my-3">Quantity</h5>
                <div className="d-flex">
                  <button
                    onClick={this.changeQuantity}
                    name="decrease"
                    className="btn bg-primary-color fw-bold"
                  >
                    -
                  </button>
                  <span className="btn w-25">{this.state.quantity}</span>
                  <button
                    onClick={this.changeQuantity}
                    name="increase"
                    className="btn bg-primary-color fw-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart">
                <button
                  onClick={this.sendproduct}
                  className="btn bg-secondary-color rounded-pill py-2 px-5 fw-bold mx-3"
                >
                  Add to cart
                </button>
                <button className="btn bg-primary-color rounded-pill py-2 px-5 fw-bold">
                  Pick up From store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
