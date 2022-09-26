import React from 'react'
import { NavBarStyles } from './NavBarStyles'

const NavBar = () => {
  return (
    <NavBarStyles>
        <div className="logo-section">
            <div className="logo">
                <img src="" alt="Logo" />
                <h3>Reward your Teacher</h3>
            </div>
        </div>
        <div className="links-section">
            <ul>
                <li>Home</li>
                <li>About Reward your Teacher</li>
                <li>Contact Us</li>
                <button>Login</button>
            </ul>
        </div>
    </NavBarStyles>
  )
}

export default NavBar
