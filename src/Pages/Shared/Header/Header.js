import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../Assests/images/logo2.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="" />
        <div className="nav-links">
          <Link className="link cart-icon" to="/cart">
            <BsCart />
            <small className="cart-count">10</small>
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>

          <Link className="link signup" to="/signup">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
