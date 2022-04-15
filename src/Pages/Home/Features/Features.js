import React from "react";
import icon1 from "../../../Assests/images/feature/feature-icon1.png";
import icon2 from "../../../Assests/images/feature/feature-icon2.png";
import icon3 from "../../../Assests/images/feature/feature-icon3.png";
import feature1 from "../../../Assests/images/feature/feautre-img1.png";
import feature2 from "../../../Assests/images/feature/feautre-img2.png";
import feature3 from "../../../Assests/images/feature/feautre-img3.png";
import Feature from "./Feature";
import "./Features.css";

const Features = () => {
  const features = [
    {
      img: feature1,
      icon: icon1,
      name: "Fast Delivery",
      description:
        "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our time",
    },
    {
      img: feature2,
      icon: icon2,
      name: "A Good Auto Responder",
      description:
        "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our time",
    },
    {
      img: feature3,
      icon: icon3,
      name: "Home Delevery",
      description:
        "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our time",
    },
  ];
  return (
    <section className="feature-container">
      <h2>Why You choose us</h2>
      <p className="sub-title">
        Barton waited twenty always repair in within we do.an delighte offending
        curiosity my is dashwoods at.Boy propsperous increasing surronded.
      </p>
      <div className="feature-content">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
