import React, { useContext } from "react";
import { MyContext } from "../../MyContext/MyContext";
import Cart from "../Checkout/Cart/Cart";
import "./AddToCart.css";
const AddToCart = () => {
  const { carts } = useContext(MyContext);
  return (
    <div className="AddToCart-container">
      {carts.map((cart) => (
        <Cart key={cart._id} cart={cart} />
      ))}
    </div>
  );
};

export default AddToCart;
