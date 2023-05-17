import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Kharidoooo.png";
const Search = ({ cardItem }) => {
  window.addEventListener("scroll", function() {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width"></div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="search karo or kharidoooo......."
              onChange={inputHandler}
            />
            <span>All categories</span>
          </div>
          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-cicle"></i>
                <span>{cardItem.length === 0 ? "" : cardItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
