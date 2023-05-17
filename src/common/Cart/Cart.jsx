import React from "react";
import "./style.css";
const Cart = ({ cardItem, addtocart, decreaseQty }) => {
  const totalPrice = cardItem.reduce(
    (price, item) => price + item.qty * 1000 + item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cardItem.length === 0 && (
              <h1 className="no-items product">
                Oops ,there is no any prodcut selected
              </h1>
            )}
            {cardItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>{productQty}.00rs</span>
                    </h4>
                  </div>
                  <div className="card-item-function">
                    <div className="removeCart">
                      <button>
                        <i className="fa -solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addtocart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total price:</h4>
              <h3>{totalPrice}.00rs</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
