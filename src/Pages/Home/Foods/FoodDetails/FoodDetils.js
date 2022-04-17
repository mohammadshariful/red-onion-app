import React, { useContext, useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../../MyContext/MyContext";
import "./FoodDetils.css";
const FoodDetils = () => {
  const { addToCart } = useContext(MyContext);

  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [id]);
  const unique = foods.find((food) => food._id === id);

  return (
    <div className="details-container">
      <div className="description-container">
        <h1>{unique?.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          tempore maxime ipsam suscipit odit sequi, porro recusandae soluta
          sapiente ullam labore commodi quia provident repellat, assumenda,
          fugiat quae nemo officiis!
        </p>
        <div className="price-set">
          <h3>${unique?.price}</h3>
          <p className="calculate-btn">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </p>
        </div>
        <button onClick={() => addToCart(unique)} className="add-items">
          <BsCart />
          <span>Add</span>
        </button>
      </div>
      <div className="food-img">
        <img src={unique?.picture} alt="" />
      </div>
    </div>
  );
};

export default FoodDetils;
