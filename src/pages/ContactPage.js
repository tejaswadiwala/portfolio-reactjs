import React from 'react';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => (
    <>
    <br />
    <font color="#2F4F4F">
    <h2>Contact Me</h2>
    <span className="contacts-heading">
        <u>Email:</u><br />
        <a href="mailto:twadiwal@lakeheadu.ca"><b>twadiwal@lakeheadu.ca</b></a> <br /> <br />

        <u>Cell:</u><br />
        <b>+1 (807) 357-7932</b> <br /><br />

        <u>LinkedIn:</u><br />
        <a href="https://www.linkedin.com/in/tejaswadiwala/">
            <FontAwesomeIcon className="icons-body" icon={faLinkedin} />
        </a> <br /><br />

        <u>GitHub:</u><br />
        <a href="https://github.com/tejaswadiwala">
            <FontAwesomeIcon className="icons-body" icon={faGithub} />
        </a> <br /><br />
    </span>

    <br />Website under construction, More content Coming Soon.
    </font>
    </>
);

export default ContactPage;