import React from "react";
import "./SingleFood.css";
const SingleFood = ({ SingleFood }) => {
  console.log(SingleFood);
  const { _id, name, description, picture, price } = SingleFood;
  return (
    <div className="singleFood-container">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>$ {price}</h3>
      <div className="detils">
        <small>See Details</small>
      </div>
    </div>
  );
};

export default SingleFood;
