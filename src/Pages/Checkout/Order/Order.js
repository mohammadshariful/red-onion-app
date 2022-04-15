import React from "react";
import Cart from "../Cart/Cart";
import "./Order.css";
const Order = () => {
  const carts = [1, 2.3];
  return (
    <div className="order-container">
      <h3>
        From <span>Gulshan Plaza Restura GPR</span>
      </h3>
      <p>
        <small>Arriving in 20-30 min</small>
      </p>
      <p>
        <small>107 Rd No 8</small>
      </p>
      <div>
        <ul>
          {carts.map((cart, index) => (
            <Cart key={index} cart={cart} />
          ))}
        </ul>
      </div>
      <div className="order-summary">
        <div className="summary-info">
          <h3>Subtotal 4 item</h3>
          <span>$320.00</span>
        </div>
        <div className="summary-info">
          <h3>Tax</h3>
          <span>$5.00</span>
        </div>
        <div className="summary-info">
          <h3>Delivery fee</h3>
          <span>$2.00</span>
        </div>
        <div className="summary-info">
          <h2>Total</h2>
          <span>$327</span>
        </div>
      </div>
      <button type="button" className="submit-btn">
        Place Order
      </button>
    </div>
  );
};

export default Order;
