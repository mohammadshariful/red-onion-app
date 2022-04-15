import { useEffect, useState } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return { foods, loading };
};

export default useFoods;
