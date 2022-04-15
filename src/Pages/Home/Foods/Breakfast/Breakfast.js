import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import SingleFood from "../SingleFood/SingleFood";
import "./Breakfast.css";

const Breakfast = () => {
  const { foods } = useFoods();
  const breaksfastFood = foods.filter((food) =>
    food.catagory.includes("breakfast")
  );

  return (
    <div className="child-foods-container">
      {breaksfastFood.map((breakfast) => (
        <SingleFood key={breakfast._id} SingleFood={breakfast} />
      ))}
    </div>
  );
};

export default Breakfast;
