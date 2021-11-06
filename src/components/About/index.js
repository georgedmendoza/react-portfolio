import React from 'react';
// import BackgroundEffect from '../Particles';

import headshot from '../../assets/cover/Headshot.jpg';

function About() {
    return(
        
        <section className='resume'>
            <blockquote className="blockquote">
                <p>"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning"</p>
            </blockquote>
            <img src={headshot} className='avatar' alt='avatar'/>
            <h1>About me</h1>
            <p> 
            Hi there :smiley: My name is George and I am web developer. I enjoy
            </p>

            {/* <BackgroundEffect></BackgroundEffect> */}
        </section>
    );
}

export default About;