import React from 'react';
import "./Products.css";


 


const Products = (productItemss,handleAddProduct) => {
    console.log(productItemss,handleAddProduct)
    const productItems=[
               
                {
                    id:"1",
                    name:"Beats Headphone",
                    price:999,
                    image:"./Pics/Shoop9.jpg",
                },
                {
                    id:"2",
                    name:"Sol Headphone",
                    price:899,
                    image:"./Pics/Shoop8.jpg",
                },
                {
                    id:"3",
                    name:"Sennheiser",
                    price:799,
                    image:"./Pics/Shoop7.jpg",
                },
                {
                    id:"4",
                    name:"Iphone X",
                    price:1199,
                    image:"./Pics/Shoop6.jpg",
                },
                {
                    id:"5",
                    name:"Samsung",
                    price:1099,
                    image:"./Miral2.jpg",
                },
                {
                    id:"6",
                    name:"OnePlus",
                    price:1299,
                    image:"./Pics/Shoop1.jpg",
                },
                {
                    id:"7",
                    name:"Macbook Pro",
                    price:2999,
                    image:"./Pics/Shoop2.jpg",
                },
                {
                    id:"8",
                    name:"Acer Laptop",
                    price:1099,
                    image:"./Pics/Miral.jpg",
                },
                {
                    id:"9",
                    name:"Asus Laptop",
                    price:1299,
                    image:"./Pics/Shoop4.jpg",
                },
            ];
  return (
    <div className='products'>
         {  
         productItems.map((productItem) =>(  

         
           <div className='card' >
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