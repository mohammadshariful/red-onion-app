import React from "react";
import facebook from "../../Assests/images/social-icons/icons8-facebook-30.png";
import github from "../../Assests/images/social-icons/icons8-github-30.png";
import google from "../../Assests/images/social-icons/icons8-google-30.png";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <>
      <div className="horizontal-line">
        <span className="middle-line"></span>
        <span>Or</span>
        <span className="middle-line"></span>
      </div>
      <div className="socail-container">
        <button className="social-btn">
          <img src={google} alt="" />
          <span>Google</span>
        </button>
        <button className="social-btn">
          <img src={facebook} alt="" /> <span>Facebook</span>
        </button>
        <button className="social-btn">
          <img src={github} alt="" />
          <span>Github</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
