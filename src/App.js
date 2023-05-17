import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./component/Data";
import Cart from "./common/Cart/Cart";
import Sdata from "./component/shops/Sdata";
import Footer from "./common/Footer/Footer";
import Dashboard from "./component/Dashboard/Dashboard";
import Preferences from "./component/Preferences/Preferences";
const App = () => {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cardItem, setCardItem] = useState([]);
  // const [token, setToken] = useState();

  const addtocart = (product) => {
    const prductexit = cardItem.find((item) => item.id === product.id);
    if (prductexit) {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...prductexit, qty: prductexit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cardItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const prductexit = cardItem.find((item) => item.id === product.id);
    if (prductexit.qty === 1) {
      setCardItem(cardItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...prductexit, qty: prductexit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cardItem={cardItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addtocart={addtocart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/Cart" exact>
            <Cart
              cardItem={cardItem}
              addtocart={addtocart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
