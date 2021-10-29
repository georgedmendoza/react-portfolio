import React from 'react';
// const image = require('../../assets/small/github.svg').default
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <div className='container-fluid'>
            {/* <div className='container-fluid'> */}
                {/* flex flex-col items-center justify-center min-h-screen py-2 */}
                <a href='https://github.com/georgedmendoza' target = "_blank" >
                    <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
                </a>
            {/* </div> */}
            {/* <div className=''> */}
                <a href='https://www.linkedin.com/in/george-mendoza-31289b171/' target = "_blank" >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
            {/* </div> */}
            {/* <div className=''> */}
                <a href='https://twitter.com/13_Georgee' target = "_blank" >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
            {/* </div> */}
        </div>

    )
}

export default Footer;