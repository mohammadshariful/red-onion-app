import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-container">
      <div className="content-container">
        <h1>Best food food waiting for your belly</h1>
        <div className="input-group">
          <input
            type="text"
            className="serch-box"
            placeholder="Search food items"
          />
          <button type="button" className="search-btn">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
