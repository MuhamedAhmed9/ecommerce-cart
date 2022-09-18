import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SecondNav from "./Components/SecondNav/SecondNav";
import CategoriesBar from "./Components/CategoriesBar/CategoriesBar";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import SimilarProducts from "./Components/SimilarProducts/SimilarProducts";
import Footer from "./Components/Footer/Footer";
import RouteSection from "./Components/RouteSection/RouteSection";
import Cart from "./Components/Cart/Cart";

class App extends Component {
  state = {
    cartStatus: false,
    products: [],
    cartProductsNum: 0,
  };

  addProduct = (product) => {
    let products = [...this.state.products];
    let storedProduct = products.find((p) => p.id === product.id);
    if (storedProduct) {
      storedProduct.quantity += product.quantity;
      localStorage.setItem("cartProducts", JSON.stringify(products));
      this.setState({ products });
    } else {
      products.push(product);
      localStorage.setItem("cartProducts", JSON.stringify(products));
      this.setState({ products });
    }
    this.updatingProductsNum(products.length);
  };

  checkCart = () => {
    if (localStorage.getItem("cartProducts")) {
      let products = JSON.parse(localStorage.getItem("cartProducts"));
      this.setState({
        products,
      });
      this.updatingProductsNum(products.length);
    }
  };

  updatingProductsNum = (num) => {
    this.setState({ cartProductsNum: num });
  };

  changeStatus = (e) => {
    e.preventDefault();
    this.setState({ cartStatus: !this.state.cartStatus });
  };

  filterProducts = (id) => {
    let products = [...this.state.products];
    let filteredProducts = products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
    localStorage.setItem("cartProducts", JSON.stringify(filteredProducts));
    this.checkCart();
  };

  componentDidMount() {
    this.checkCart();
  }

  render() {
    return (
      <>
        <Navbar />
        <SecondNav
          productsNum={this.state.cartProductsNum}
          changeStatus={this.changeStatus}
        />
        <CategoriesBar />
        <RouteSection />
        <DisplayProduct
          products={this.state.products}
          addProduct={this.addProduct}
        />
        <SimilarProducts />
        <Footer />
        {this.state.cartStatus && (
          <Cart
            filterProducts={this.filterProducts}
            products={this.state.products}
            changeStatus={this.changeStatus}
          />
        )}
      </>
    );
  }
}

export default App;
