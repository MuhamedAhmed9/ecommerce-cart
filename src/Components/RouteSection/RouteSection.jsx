import React, { Component } from "react";

export default class RouteSection extends Component {
  render() {
    return (
      <div className="border border-bottom-3 border-top-0 border-right-0 border-left-0">
        <div className="container route-section py-3">
          <span className="current-route fw-bold">
            <a href="">Men</a>/<a href="">Clothing Tops</a>/
            <a href="">Adidas</a>/<span>Adidas Black T-Shirt</span>
          </span>
        </div>
      </div>
    );
  }
}
