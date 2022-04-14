import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assests/images/logo.png";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-img">
          <img className="logo " src={logo} alt="" />
        </div>
        <div className="footer-details">
          <div className="detail">
            <ul>
              <li>About onlie food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your Resturant</li>
            </ul>
          </div>
          <div className="detail">
            <ul>
              <li>Get help</li>
              <li>Rad FAQs</li>
              <li>View all cities</li>
              <li>Resturants near me</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="coypright-info">
        <small>copyright &copy; {year} online food</small>
        <div className="terms-info">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
