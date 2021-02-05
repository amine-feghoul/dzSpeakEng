import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="logo">
                    <img alt="logo"/>
                </div>

                <div className="navbar-links">
                    <ul>
                        <li>Home</li>
                        <li>Timline</li>
                        <li>Account settings</li>
                        <li> More pages</li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <ul>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-home"></i></li>
                        <li><i className="far fa-bell"></i></li>
                        <li><i className="far fa-comment-alt"></i></li>
                        <li><img alt=""/> </li>
                        <li><i className="fas fa-bars"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
