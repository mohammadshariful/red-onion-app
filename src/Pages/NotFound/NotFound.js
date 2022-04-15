import React from "react";
import errorImg from "../../Assests/images/error-404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error-container">
      <img className="error-img" src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
