import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

// Footer, contains Icons with links to github and linkedin
function Footer() {
    return (
        <div className='footer'>
            <h3>
                <a href="http://github.com/alexander-perry"><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/alexander-h-perry/'><AiFillLinkedin /></a>
            </h3>
        </div>
    )
}
export default Footer;