import React from "react";
import { LoginStyles } from "./LoginStyles";
import RewardLogo from "../../assets/RewardLogo.svg";
import { Link } from "react-router-dom";
import Line from "../../assets/Line.svg";
import Google from "../../assets/Google.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <LoginStyles>
      <div className="logo">
        <img src={RewardLogo} alt="reward logo" />
        <h2>Reward your Teacher</h2>
      </div>
      <div className="login">
        <h3>Login as an old Student</h3>
        <form onSubmit={navigateToDashboard}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" />
          <label htmlFor="email">Password</label>
          <input type="text" id="password" placeholder="Enter your password" />
          <h4>Forgot password?</h4>
          <input id="login-btn" type="submit" value="Login" />
        </form>
        <div className="or">
          <img id="line" src={Line} alt="line" />
          <p>Or</p>
          <img id="line" src={Line} alt="line" />
        </div>
        <button id="google-btn">
          <img src={Google} alt="google logo" />
          Sign up with Google
        </button>
        <div className="account">
          <p id="first-paragraph">Don't have an account?</p>
          <p id="second-paragraph">Create Account</p>
        </div>
      </div>
    </LoginStyles>
  );
};

export default Login;
