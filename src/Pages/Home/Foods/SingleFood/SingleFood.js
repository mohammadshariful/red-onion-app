import React, { useContext } from "react";
import { MyContext } from "../../../../MyContext/MyContext";
import "./SingleFood.css";
const SingleFood = ({ SingleFood }) => {
  const { addToCart } = useContext(MyContext);
  const { name, description, picture, price } = SingleFood;
  return (
    <div className="singleFood-container" onClick={() => addToCart(SingleFood)}>
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
