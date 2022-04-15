import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/images/logo2.png";
import "./Login.css";
const Login = () => {
  return (
    <div className="submit-container">
      <div className="from-container">
        <div className="form-img">
          <img src={logo} alt="" />
        </div>
        <form>
          <div className="from-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="from-group">
            <input type="password" placeholder="Password" required />
          </div>
          <input className="submit-btn" type="submit" value="LogIn" />
        </form>
        <p className="forget-password">Forget your password?</p>
        <p className="login-info">
          Are your new user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
