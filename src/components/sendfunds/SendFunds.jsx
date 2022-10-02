import React from 'react';
import { SendFundsStyles } from './SendFundsStyles'
import SendFundsImage from '../../assets/SendFundsImage.svg'

const SendFunds = () => {

  return (
    <SendFundsStyles>
    <div className="left-side">
      <h1>Send surprise funds to your teacher today</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.</p>
      <button>Get Started</button>
    </div>

    <div className="right-side">
      <img src={SendFundsImage} alt="" />
    </div>

    </SendFundsStyles>
   
  )
}

export default SendFunds