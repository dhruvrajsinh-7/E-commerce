import React from "react";
import { Link } from "react-router-dom";
import logo from "./Kharidoooo.png"
const Search =({cardItem})=>
 {
     window.addEventListener("scroll",function(){
         const search=document.querySelector(".search")
         search.classList.toggle("active",window.scrollY>100)
     })
    const logout=()=> {
        localStorage.clear();
        window.location.href = '/';
    }
     return (
         <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                    </div>
                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="search karo or kharidoooo......."/>
                        <span>All categories</span>
                    </div>
                    <div className="icon f_flex width">
                   <div className="logout" onClick={logout}> <Link to="/Logout">
                            <button>
                            <i class="fa-solid fa-right-from-bracket icon-circle"></i>
                            </button>
                    </Link>                    
                    </div>
                        <div className="cart">
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag icon-cicle"></i>
                                <span>{cardItem.length===0 ? "": cardItem.length}</span>
                            </Link>
                        </div>
                        
                    </div>
                  
                </div>
            </section>
         </>
     )
 }
 export default Search