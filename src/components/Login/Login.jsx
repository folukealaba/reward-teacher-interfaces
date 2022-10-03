import React,{useState} from "react";
import { LoginStyles } from "./LoginStyles";
import RewardLogo from "../../assets/RewardLogo.svg";
import { Link } from "react-router-dom";
import Line from "../../assets/Line.svg";
import Google from "../../assets/Google.svg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleEmail = (e) =>{
    e.preventDefault();
    setEmail(e.target.value);
  }


  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email, password
      };
      const response = await axiosInstance.post("/api/auth/v1/login", data);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  };


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
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleEmail} placeholder="Enter your email" />
          <label htmlFor="email">Password</label>
          <input type="text" id="password" onChange={handlePassword} placeholder="Enter your password" />
          <Link id="link">Forgot password?</Link>
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
