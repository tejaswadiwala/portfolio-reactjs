import React from 'react';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


const Footer = () => (
    <>
    <div className="icons">
        <p>
        <Link className="icons" to="/">
            <b>Tejas Wadiwala &nbsp;</b>
        </Link>
        <a href="//www.linkedin.com/in/tejaswadiwala/">
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </a> &nbsp;
        <a href="https://github.com/tejaswadiwala">
            <FontAwesomeIcon className="icons" icon={faGithub} />
        </a>
        </p>
    </div>
    </>
);

export default Footer;