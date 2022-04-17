import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../../MyContext/MyContext";
import "./SingleFood.css";
const SingleFood = ({ SingleFood }) => {
  const navigate = useNavigate();

  const { addToCart } = useContext(MyContext);
  const { _id, name, description, picture, price } = SingleFood;
  return (
    <div className="singleFood-container">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>$ {price}</h3>

      <div className="btn-container">
        <button onClick={() => addToCart(SingleFood)}>
          <BsCart2 /> <span>Add to Cart</span>
        </button>
        <button>
          <small onClick={() => navigate(`/foodDetails/${_id}`)}>
            See Details
          </small>
        </button>
      </div>
    </div>
  );
};

export default SingleFood;
