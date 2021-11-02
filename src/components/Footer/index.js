import React from 'react';
// const image = require('../../assets/small/github.svg').default
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
    <div className='icon-container footer'>
        <div className='row'>
            <div className='col-3'>
                {/* flex flex-col items-center justify-center min-h-screen py-2 */}
                <a href='https://github.com/georgedmendoza' target="_blank"> 
                {/* add target = "_blank" later */}
                    <FontAwesomeIcon icon={faGithub} className='icon fa-lg'></FontAwesomeIcon>
                </a>
            </div>
            <div className='col-3'>
                <a href='https://www.linkedin.com/in/george-mendoza-31289b171/'  target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className='icon fa-lg'></FontAwesomeIcon>
                </a>
            </div>
            <div className='col-3 '>
                <a href='https://twitter.com/13_Georgee'  target="_blank">
                    <FontAwesomeIcon icon={faTwitter} className='icon fa-lg'></FontAwesomeIcon>
                </a>
            </div>
        </div>
    </div>

    )
}

export default Footer;