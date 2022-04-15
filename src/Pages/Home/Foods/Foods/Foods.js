import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CustomLink from "../../../Shared/CustomLink/CustomLink";
import "./Foods.css";

const Foods = () => {
  const navigate = useNavigate();
  return (
    <section className="foods-container">
      <div className="link-container">
        <CustomLink to="breakfast">Breakfast</CustomLink>
        <CustomLink to="lunch">Lunch</CustomLink>
        <CustomLink to="dinner">Dinner</CustomLink>
      </div>
      <div>
        <Outlet />
        <button
          onClick={() => navigate("/checkout")}
          type="button"
          className="checkout-btn"
        >
          Checkout Your Foods
        </button>
      </div>
    </section>
  );
};

export default Foods;
