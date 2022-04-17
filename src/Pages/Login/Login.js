import React, { useEffect } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assests/images/logo2.png";
import auth from "../../Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, user1]);

  const { email, password, handleEmail, handlePassword } = useStateHandle();

  if (loading || sending) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
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
  const handleForgetPassword = async () => {
    const emailValue = email.value;
    if (emailValue) {
      await sendPasswordResetEmail(emailValue);
      toast.success("Email sent");
    } else {
      toast.error("Please enter your email");
    }
  };

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
        <p onClick={handleForgetPassword} className="forget-password">
          Forget your password?
        </p>
        <SocialLogin />
        <p className="login-info">
          Are your new user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
