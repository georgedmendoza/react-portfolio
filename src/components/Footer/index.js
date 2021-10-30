import React from 'react';
// const image = require('../../assets/small/github.svg').default
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
    <div className='icon-container'>
        <div className='row'>
            <div className='col-lg-3 col-md-12'>
                {/* flex flex-col items-center justify-center min-h-screen py-2 */}
                <a href='https://github.com/georgedmendoza' > 
                {/* add target = "_blank" later */}
                    <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                </a>
            </div>
            <div className='col-lg-3 col-md-12'>
                <a href='https://www.linkedin.com/in/george-mendoza-31289b171/'  >
                    <FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon>
                </a>
            </div>
            <div className='col-lg-3 col-md-12'>
                <a href='https://twitter.com/13_Georgee'  >
                    <FontAwesomeIcon icon={faTwitter} className='icon'></FontAwesomeIcon>
                </a>
            </div>
        </div>
    </div>

    )
}

export default Footer;