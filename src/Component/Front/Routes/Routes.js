import React from 'react';
import Products from '../Products/Products';
 import {Route, Switch} from "react-router-dom";
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
 
const Routes = (productItems,cartItems,handleAddProduct ) => {
  return (
    <div>
      <switch>
        <Route >
          <Products   productItems={productItems} 
                     handleAddProduct={handleAddProduct} />
        </Route>
        <Route>
         <Signup  />
         <Cart cartItems={cartItems} />
        </Route>
      </switch> 

       {/* path="/" exact */}
         
        
      
       
      
        
      
       
    </div>
  );
};

export default Routes;