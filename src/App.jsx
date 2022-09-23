import "./App.css";
import React, { Component, lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const SecondNav = lazy(() => import("./Components/SecondNav/SecondNav"));
const CategoriesBar = lazy(() =>
  import("./Components/CategoriesBar/CategoriesBar")
);
const DisplayProduct = lazy(() =>
  import("./Components/DisplayProduct/DisplayProduct")
);
const SimilarProducts = lazy(() =>
  import("./Components/SimilarProducts/SimilarProducts")
);
const Footer = lazy(() => import("./Components/Footer/Footer"));
const RouteSection = lazy(() =>
  import("./Components/RouteSection/RouteSection")
);
const Cart = lazy(() => import("./Components/Cart/Cart"));

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
      <Suspense fallback={<div>Loading.......</div>}>
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
      </Suspense>
    );
  }
}

export default App;
