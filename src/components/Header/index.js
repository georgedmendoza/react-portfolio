import React, { useState } from 'react';
// import coverImage from '../../assets/cover/background.png'
import Nav from '../Nav';
import About from '../About';

function Header() {
    // to change what page is being viewed
    const renderSwtich = (params) =>{
        switch(params) {
            case 'About me':
            return <About></About>;
            // case 'Portfolio':
            // return <Portfolio></Portfolio>;
            // case 'Contact':
            // return <Contact></Contact>;
            // case 'Resume':
            // return <Resume></Resume>
            default:
                return <About></About>;
        }

    }

    const [tab] = useState(['About me','Portfolio','Contact','Resume']);

    // what is selected 
    const [currentTab, setCurrentTab] = useState(tab[0])
    // determine what will be siplayed
    // const [contactSelected, setContactSelected] = useState(false);

    return(
        <section>
            <Nav
                tab={tab}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            ></Nav>
            <div>
                { renderSwtich()}
            </div>
            
        </section>
    )
}

export default Header;