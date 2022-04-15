import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loging-container">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
