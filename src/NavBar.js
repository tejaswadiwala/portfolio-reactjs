import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './TW_logo_transparent_bg.png';

const NavBar = () => (
    <nav>
        <ul> 
            <li>
                <Link to="/"><img src={Logo} height="42.17" width="53.25" alt="TWlogo"></img></Link> 
            </li>
            <li>   
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>    
    </nav>
);


export default NavBar;