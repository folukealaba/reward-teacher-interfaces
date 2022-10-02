import React from 'react'
import { NavBarStyles } from './NavBarStyles'
import RewardLogo from '../../assets/RewardLogo.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateToLogin = () =>{
    navigate("/login")
  };
  return (
    <NavBarStyles>
        <div className="logo-section">
                <img src={RewardLogo} alt="Reward Logo" />
                <h3>Reward your Teacher</h3>
        </div>
        <div className="links-section">
            <ul>
                <li><span id='home'>Home</span></li>
                <li>About Reward your Teacher</li>
                <li>Contact Us</li>
            </ul>
            <button onClick={navigateToLogin}>Login</button>
        </div>
    </NavBarStyles>
  )
}

export default NavBar
