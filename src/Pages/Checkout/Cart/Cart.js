import React from "react";
import logo from "../../../Assests/images/breakfast/breakfast1.png";
import "./Cart.css";
const Cart = () => {
  return (
    <li className="cart-container">
      <div className="delivery-info">
        <img className="cart-img" src={logo} alt="" />
        <div className="product-info">
          <h2>Butter Naan</h2>
          <p className="price">$40</p>
          <small>Deivery Free</small>
        </div>
      </div>
      <div className="increase-decrease">
        <span className="calculate">-</span>
        <input type="number" value="2" />
        <span className="calculate">+</span>
      </div>
    </li>
  );
};

export default Cart;
