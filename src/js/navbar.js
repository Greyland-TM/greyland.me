import React from 'react'

const Navbar = () => (
    <div className="nav-container">
        
        <div className="navbar">
            <div className="toggle-container">
                <label className="switch">
                    <input  type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <p className="toggle-container__lable">Dark Mode</p>
            </div>

            <ul className="navbar__list">
                <li className="navbar__item">Home</li>
                <li className="navbar__item">Skills</li>
                <li className="navbar__item">About me</li>
                <li className="navbar__item">Projects</li>
                <li className="navbar__item">Contact</li>
            </ul>
        </div>
    </div>
);

export default Navbar;