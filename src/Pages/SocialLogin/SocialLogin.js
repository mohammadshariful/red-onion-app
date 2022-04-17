import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import facebook from "../../Assests/images/social-icons/icons8-facebook-30.png";
import github from "../../Assests/images/social-icons/icons8-github-30.png";
import google from "../../Assests/images/social-icons/icons8-google-30.png";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./SocialLogin.css";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);

  useEffect(() => {
    if (user1 || user2 || user3) {
      navigate("/");
    }
  }, [user1, user2, user3]);
  if (loading1 || loading2 || loading3) {
    return <Loading />;
  }

  return (
    <>
      <div className="horizontal-line">
        <span className="middle-line"></span>
        <span>Or</span>
        <span className="middle-line"></span>
      </div>
      {(error1 || error2 || error3) && (
        <p className="error">
          {error1?.message} {error2?.message} {error3?.message}
        </p>
      )}
      <div className="socail-container">
        <button onClick={() => signInWithGoogle()} className="social-btn">
          <img src={google} alt="" />
          <span>Google</span>
        </button>
        <button onClick={() => signInWithFacebook()} className="social-btn">
          <img src={facebook} alt="" /> <span>Facebook</span>
        </button>
        <button onClick={() => signInWithGithub()} className="social-btn">
          <img src={github} alt="" />
          <span>Github</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
