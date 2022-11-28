import React from "react";
import './headerstyle/header.css'

const Header = ()=>{
    return(
        <div>
            <div className="nav-bar-container">
                <nav>
                    <ul>
                        <li><a href="#PROJECT">PROJECT</a></li>
                        <li><a href="#ABOUT">ABOUT</a></li>
                        <li><a href="#BLOGS">BLOGS</a></li>
                        <li><a href="#CONTACT">CONTACT</a></li>
                    </ul>
                </nav>
                <div className="right">
                    
                </div>
            </div>
            
        </div>
    )
}

export default Header