import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Loading from "../../../Shared/Loading/Loading";
import SingleFood from "../SingleFood/SingleFood";

const Lunch = () => {
  const { foods, loading } = useFoods();
  const lunchFood = foods.filter((food) => food.catagory.includes("dinner"));
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="child-foods-container">
          {lunchFood.map((breakfast) => (
            <SingleFood key={breakfast._id} SingleFood={breakfast} />
          ))}
        </div>
      )}
    </>
  );
};

export default Lunch;
