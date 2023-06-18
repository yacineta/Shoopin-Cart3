import React from 'react';
import {link } from "react-router-dom";
import"./Header.css";
import { MdAssessment,MdCreditCard,MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <header className='header'>
        <div>
            <h1>
               <li to="/" className='logo'>
                Electronics Shop
               </li>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                
                <li>
                    <a to="/">
                    <MdLogout/> Home 
                    </a> 

                </li>
            </ul>
            <ul>
                <li>
                    <a to="/signup">
                       <MdAssessment/> Signup
                        </a>

                </li>
            </ul>
            <ul>
                <li>
                    <a to="/cart">
                    <MdCreditCard />Carte</a>

                </li>
            </ul>
        </div>


    </header>
  )
};

export default Header;