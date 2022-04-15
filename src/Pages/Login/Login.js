import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assests/images/logo2.png";
import auth from "../../Firebase/Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const { email, password, handleEmail, handlePassword } = useStateHandle();
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    signInWithEmailAndPassword(emailValue, passwordValue);
  };

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="submit-container">
      <div className="from-container">
        <div className="form-img">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="from-group">
            <input
              onBlur={handleEmail}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="from-group">
            <input
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          {error && <p className="error">{error.message}</p>}
          <input className="submit-btn" type="submit" value="LogIn" />
        </form>
        <p className="forget-password">Forget your password?</p>
        <SocialLogin />
        <p className="login-info">
          Are your new user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
