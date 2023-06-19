import React from 'react'

 
const Cart = ({cartItems}) => {
     console.log(cartItems);
  return (
    <div className='cart-items'>
          <div className='cart-items-header'>
            Cart items

          </div>

          {cartItems.length === 0 && (<div>No items ar</div>
         )}  
   
         <div>
         {
         cartItems.map((item) =>(
           
                <div key={item.id}>
                   
                        <img className='cart-items-image'
                     src={item.image} 
                     alt={item.name}></img>
                    
                    
                </div>

               ))}
            
            
                

         </div>
    </div>
  )
};

export default Cart;