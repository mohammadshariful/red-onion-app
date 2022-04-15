import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Loading from "../../../Shared/Loading/Loading";
import SingleFood from "../SingleFood/SingleFood";
import "./Breakfast.css";
const Breakfast = () => {
  const { foods, loading } = useFoods();
  const breaksfastFood = foods.filter((food) =>
    food.catagory.includes("breakfast")
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="child-foods-container">
          {breaksfastFood.map((breakfast) => (
            <SingleFood key={breakfast._id} SingleFood={breakfast} />
          ))}
        </div>
      )}
    </>
  );
};

export default Breakfast;
