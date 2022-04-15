import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assests/images/logo2.png";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Header.css";
const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  return (
    <header>
      <nav>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          className="logo"
          src={logo}
          alt=""
        />
        <div className="nav-links">
          <Link className="link cart-icon" to="/cart">
            <BsCart />
            <small className="cart-count">10</small>
          </Link>
          {user ? (
            <Link onClick={() => signOut(auth)} className="link" to="/login">
              Log Out
            </Link>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}

          <Link className="link signup" to="/register">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
