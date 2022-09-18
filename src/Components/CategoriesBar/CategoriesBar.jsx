import React, { Component } from "react";

export default class CategoriesBar extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="container categories my-2 fw-bold">
          <ul className="d-flex justify-content-between text-white py-2">
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Kids</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li className="text-danger">Offers</li>
          </ul>
        </div>
      </div>
    );
  }
}
