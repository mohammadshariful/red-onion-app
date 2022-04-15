import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import SingleFood from "../SingleFood/SingleFood";

const Dinner = () => {
  const { foods } = useFoods();
  const dinnerFood = foods.filter((food) => food.catagory.includes("dinner"));
  return (
    <div className="child-foods-container">
      {dinnerFood.map((breakfast) => (
        <SingleFood key={breakfast._id} SingleFood={breakfast} />
      ))}
    </div>
  );
};

export default Dinner;
