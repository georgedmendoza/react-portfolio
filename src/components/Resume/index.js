import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {   } from '@fortawesome/free-brands-svg-icons';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons'

function Resume() {
    return(
        <div className='resume'>
           
            <div>
                Here are some of the skills that I have developed over time, my resume can 
                be downloaded with the icon below
            </div>
            <a href={require(`../../assets/file/George-Mendoza-Resume.pdf`).default} download>
                <FontAwesomeIcon icon={faDownload} className='resume-icon'></FontAwesomeIcon>
            </a>
            <div>
                <h2>Front-End Proficiencies</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
            </div>
            <div>
                <h2>Back-End Proficiencies</h2>
                <li>Express</li>
                <li>APIs (restful, thir party, web, server side)</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
            </div>
           
        </div>
    );
}

export default Resume;