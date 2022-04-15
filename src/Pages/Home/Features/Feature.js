import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Feature = ({ feature }) => {
  const { icon, img, name, description } = feature;
  return (
    <div className="feautre-container">
      <img className="feature-img" src={img} alt="" />
      <div className="feautre-info">
        <div className="feature-title">
          <img src={icon} alt="" />
          <h3>{name}</h3>
        </div>
        <p>{description}</p>
        <button className="feature-btn">
          <span>See more</span>
          <FaArrowRight className="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Feature;
