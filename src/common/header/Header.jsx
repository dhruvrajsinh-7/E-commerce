import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "./header.css";
const Header = ({ cardItem }) => {
  return (
    <>
      <Search cardItem={cardItem} />
      <Navbar />
    </>
  );
};
export default Header;
