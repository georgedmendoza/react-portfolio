import React from 'react';
// import BackgroundEffect from '../Particles';

import headshot from '../../assets/cover/Headshot.jpg';

function About() {
    return(
        
        <section className='resume'>
            <blockquote className="blockquote">
                <p>"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning"</p>
            </blockquote>
            <img src={headshot} className='avatar'/>
            <h1>About me</h1>
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur.
            </p>

            {/* <BackgroundEffect></BackgroundEffect> */}
        </section>
    );
}

export default About;