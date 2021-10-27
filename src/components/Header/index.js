import React, { useState } from 'react';
// import coverImage from '../../assets/cover/background.png'
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Project from '../Project';

function Header() {
    // const tab = useState(['About me','Portfolio','Contact','Resume']);
    const [currentTab, setCurrentTab] = useState('About me')
    // what is selected , currently at About me
    // determine what will be siplayed
    const [contactSelected, setContactSelected] = useState(false);

    const tabs = ['About me', 'Portfolio', 'Contact'];

    // to change what page is being viewed
    const renderSwitch = () =>{
        // pass in the current tab
        switch(currentTab) {
            case 'About me':
                return <About></About>;
            case 'Portfolio':
                return <Project></Project>;
            case 'Contact':
                return <Contact></Contact>;
            // case 'Resume':
            // return <Resume></Resume>
            default:
                return <About></About>;
        }

    }

    return(
        <section>
            <Nav
                // tab={tab}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                tabs={tabs}
            ></Nav>
            <div>
                { renderSwitch() }
            </div>
            
        </section>
    )
}

export default Header;