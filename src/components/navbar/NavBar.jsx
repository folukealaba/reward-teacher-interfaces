import React from 'react'
import { NavBarStyles } from './NavBarStyles'
import RewardLogo from '../../assets/RewardLogo.svg';

const NavBar = () => {
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
                <button>Login</button>
            </ul>
        </div>
    </NavBarStyles>
  )
}

export default NavBar
