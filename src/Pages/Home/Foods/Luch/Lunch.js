import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import SingleFood from "../SingleFood/SingleFood";

const Lunch = () => {
  const { foods } = useFoods();
  const lunchFood = foods.filter((food) => food.catagory.includes("dinner"));
  return (
    <div className="child-foods-container">
      {lunchFood.map((breakfast) => (
        <SingleFood key={breakfast._id} SingleFood={breakfast} />
      ))}
    </div>
  );
};

export default Lunch;
