import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  const { picture, price, name } = cart;
  return (
    <li className="cart-container">
      <div className="delivery-info">
        <img className="cart-img" src={picture} alt="" />
        <div className="product-info">
          <h2 title={name}>
            {name.length > 20 ? name.slice(0, 20) : name + "..."}
          </h2>
          <p className="price">${price}</p>
          <small>Deivery Free</small>
        </div>
      </div>
      <div className="increase-decrease">
        <span className="calculate">-</span>
        <input type="number" placeholder="2" />
        <span className="calculate">+</span>
      </div>
    </li>
  );
};

export default Cart;
