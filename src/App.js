 
//  import { Container} from 'react-bootstrap'
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import { BrowserRouter as Route} from "react-router-dom"
import React, { useState }  from "react";
import data from "./Component/Back/Data/Data";
import Header from "./Component/Front/Header/Header";
// import Routes from "./Component/Front/Routes/Routes";
// import { Route, Switch } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Products from "./Component/Front/Products/Products";
import Signup from "./Component/Front/Signup/Signup";
import Cart from "./Component/Front/Cart/Cart";


// data
// data

const App =() => {

   const {productItems} = data;

     console.log("yasser",data,productItems)

  const [cartItems, setCarItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist){
      setCarItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity:ProductExist.quantity + 1}: item)
      );
       } else{
        setCarItems([...cartItems,{...product,quantity:1} ])

      }
}
 


  
   return (
  <div className="App">
    <Header />
    {/* <BrowserRouter> */}
      {/* <Routes>
        <Route path="/products"  element={<Products cartItems={cartItems} 
             handleAddProduct={handleAddProduct}  />}/> 
          
        <Route path="/signup" element={<Signup />}/>
       
        <Route path="/cart" element={<Cart cartItems={cartItems} 
               handleAddProduct={handleAddProduct} />}/>
        
               
        
       
      </Routes> */}

             <Products cartItems={cartItems} 
             handleAddProduct={handleAddProduct}  /> 
       {/* </BrowserRouter> */}
    {/* </Routes>    */}
    
    <Signup />
    </div>
    );
  
}

export default App;
