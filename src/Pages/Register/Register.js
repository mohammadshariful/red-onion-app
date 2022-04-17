import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assests/images/logo2.png";
import auth from "../../Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
  } = useStateHandle();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    await createUserWithEmailAndPassword(emailValue, passwordValue);
    await toast.success("user create success");
  };
  return (
    <div className="submit-container">
      <div className="from-container">
        <div className="form-img">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="from-group">
            <input onBlur={handleName} type="text" placeholder="Name" />
          </div>
          <div className="from-group">
            <input
              onBlur={handleEmail}
              type="email"
              placeholder="Email"
              required
            />
            {email?.error && <p className="error">{email.error}</p>}
          </div>
          <div className="from-group">
            <input
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
            {password?.error && <p className="error">{password.error}</p>}
          </div>
          <div className="from-group">
            <input
              onBlur={handleConfirmPassword}
              type="password"
              placeholder="Confirm Password"
              required
            />
            {confirmPassword?.error && (
              <p className="error">{confirmPassword.error}</p>
            )}
          </div>
          {error && <p className="error">{error.message}</p>}
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
