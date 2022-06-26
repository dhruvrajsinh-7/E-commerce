import React from "react";
import Head from "./head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./header.css";
 const Header=({cardItem})=>
 {
     return(
         <>
            <Head/> 
            <Search cardItem={cardItem}/>
            <Navbar/>
    
        </>
     )
 }
 export default Header