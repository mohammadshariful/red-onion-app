import React from "react";
import purchaseImg from "../../../Assests/images/delivery.png";
import riderImg from "../../../Assests/images/rider.png";
import "./Purchase.css";
const purchase = () => {
  return (
    <div className="purchase-container">
      <div className="purchase-img-container">
        <img src={purchaseImg} alt="" />
      </div>
      <div className="purchase-location">
        <div>
          <h5>Your Location</h5>
          <small>107 Rd No 8</small>
        </div>
        <div>
          <h5>Shop Address</h5>
          <small>Gulshan Plaza Restura GPR</small>
        </div>
      </div>
      <div>
        <h1>09:30</h1>
        <p>Estimated delivery time</p>
      </div>
      <div className="rider-info">
        <div className="rider-img-container">
          <img src={riderImg} alt="" />
        </div>
        <div className="rider">
          <h2>Shariful</h2>
          <small>Your Raider</small>
        </div>
      </div>
      <button className="contact">Contact</button>
    </div>
  );
};

export default purchase;
