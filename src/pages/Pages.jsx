import React from "react";
import Annocument from "../component/Announcement/Annu.jsx";
import Discount from "../component/discount/Discount.jsx";
import FlashDeals from "../component/flashdeals/FlashDeals.jsx";
import Home from "../component/mainpage/Home.jsx";
import { NewArrivals } from "../component/Newarrivals/NewArrivals.jsx";
import Shop from "../component/shops/Shop.jsx";
import TopCate from "../component/top/TopCate.jsx";
import Wrapper from "../component/Wrapper/Wrapper.jsx";
const Pages = ({ productItems, cardItem, addtocart, shopItems }) => {
  return (
    <>
      <Home cardItem={cardItem} />
      <FlashDeals productItems={productItems} addtocart={addtocart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addtocart={addtocart} />
      <Annocument />
      <Wrapper />
    </>
  );
};
export default Pages;
