import React from "react";
import { SendFundsStyles } from "./SendFundsStyles";
import SendFundsImage from "../../assets/SendFundsImage.svg";

const SendFunds = () => {
  return (
    <SendFundsStyles>
      <div className="left-side">
        <h1>Send surprise funds to your teacher today</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget
          ipsum, sed praesent.
        </p>
        <div className="left-side-btn">
          <button>Get Started</button>
        </div>
      </div>

  
        <img src={SendFundsImage} alt="" className="right-side" />
  
    </SendFundsStyles>
  );
};

export default SendFunds;
