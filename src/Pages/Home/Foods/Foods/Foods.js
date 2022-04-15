import React from "react";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Luch/Lunch";
import "./Foods.css";
const Foods = () => {
  return (
    <section className="foods-container">
      <div className="link-container"></div>
      <div>
        <Breakfast />
        <Lunch />
        <Dinner />
        <button type="button" className="checkout-btn">
          Checkout Your Foods
        </button>
      </div>
    </section>
  );
};

export default Foods;
