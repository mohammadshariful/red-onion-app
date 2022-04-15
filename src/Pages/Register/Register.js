import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/images/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  return (
    <div className="submit-container">
      <div className="from-container">
        <div className="form-img">
          <img src={logo} alt="" />
        </div>
        <form>
          <div className="from-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="from-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="from-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="from-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <input className="submit-btn" type="submit" value="Sign Up" />
        </form>
        <SocialLogin />
        <p className="login-info">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
