import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Foods from "../Foods/Foods/Foods";
import "./Home.css";
const Home = () => {
  return (
    <main className="home-container">
      <Banner />
      <Foods />
      <Features />
    </main>
  );
};

export default Home;
