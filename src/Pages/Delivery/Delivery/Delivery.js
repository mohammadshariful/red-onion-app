import React from "react";
import Location from "../Location/Location";
import Purchase from "../Purchase/Purchase";
import "./Delivery.css";
const Delivery = () => {
  return (
    <div className="delivery-container">
      <Location />
      <Purchase />
    </div>
  );
};

export default Delivery;
