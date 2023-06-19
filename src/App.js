
//  import { Container} from 'react-bootstrap'
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import { BrowserRouter as Route} from "react-router-dom"
import React, { useState } from "react";
import data from "./Component/Back/Data/Data";
import Header from "./Component/Front/Header/Header";
// import Routes from "./Component/Front/Routes/Routes";
// import { Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Products from "./Component/Front/Products/Products";
import Signup from "./Component/Front/Signup/Signup";
import Cart from "./Component/Front/Cart/Cart";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCarItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist) {
      setCarItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));
    } else {
      setCarItems([...cartItems, { ...product, quantity: 1 }])

    }
  }



  
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products productItems={productItems}
              handleAddProduct={handleAddProduct} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems}
              handleAddProduct={handleAddProduct} />} />
            <Route path="/" element={<div>home</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
