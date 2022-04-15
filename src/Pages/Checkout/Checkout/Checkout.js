import React from "react";
import Order from "../Order/Order";
import Shipping from "../Shipping/Shipping";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="checkout-container">
      <Shipping />
      <Order />
    </div>
  );
};

export default Checkout;
