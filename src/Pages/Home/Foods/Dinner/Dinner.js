import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Loading from "../../../Shared/Loading/Loading";
import SingleFood from "../SingleFood/SingleFood";

const Dinner = () => {
  const { foods, loading } = useFoods();
  const dinnerFood = foods.filter((food) => food.catagory.includes("dinner"));
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="child-foods-container">
          {dinnerFood.map((breakfast) => (
            <SingleFood key={breakfast._id} SingleFood={breakfast} />
          ))}
        </div>
      )}
    </>
  );
};

export default Dinner;
