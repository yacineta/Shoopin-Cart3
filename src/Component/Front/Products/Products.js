import React from 'react';
import "./Products.css";


 


const Products = ({productItems,handleAddProduct}) => {
  return (
    <div className='products'>
         {  
         productItems.map((productItem, index) =>(  

         
           <div className='card' key={index}>
             <div className=''>
              <img className='product-image'
               src={productItem.image} 
               alt={productItem.name}>

               </img>
              



              </div>
              <div>
                <h3 className='product-name'>
                    {productItem.name}
                </h3>
               

              </div>
              <div className='product-price'>
                $ {productItem.price}
                </div>
                <div>
                    <button 
                    className='product-add-button' 
                    onClick={() =>handleAddProduct(productItem)}>
                        add to carte</button>
                </div>
           </div>
        
        ))}
    </div>
  );
};

export default Products;




// function Products() {
//     const productItems=[
//         '../Pics/Shoop1.jpg',
//         '../Pics/Shoop2.jpg',
//         '../Pics/Miral.jpg',
//         '../Pics/Soop4.jpg',
//     ];
//     function productComponent() {
//         return productItems.map((name) => {
//             return (
//                 <img className='Kakachi' src={name}></img>
//             );
//         })
//     }

//   return (
//     <div className='products'>
//         <div className='card'>
//             <productComponent />
//             <div className='price'>
//                 <h3>1234213456</h3>
//             </div>
//             <div className='add-btn'>
//                 <button>Add</button>
//             </div>

//         </div>
//         <div className='card'>
//             <productComponent />
//             <div className='price'>
//                 <h3>1234213456</h3>
//             </div>
//             <div className='add-btn'>
//                 <button>Add</button>
//             </div>

//         </div>


//     </div>
//   )
// };

// export default Products;