import React from 'react';
import {Link } from "react-router-dom";
import"./Header.css";
import { MdAssessment,MdCreditCard,MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <header className='header'>
        <div>
            <h1>
            
               <li className='logo'>
               <Link to="/">Electronics Shop</Link>
                
               </li>
            </h1>
        </div>
        <div className='header-links'>
            <ul> 
                <li>
                    <Link to="/">
                    <MdLogout/> Home 
                    </Link> 

                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup">
                       <MdAssessment/> Signup
                        </Link>

                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/cart">
                    <MdCreditCard />Carte</Link>

                </li>
            </ul>
        </div>


    </header>
  )
};

export default Header;