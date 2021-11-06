import React, { useEffect } from 'react';
// useEffect here for something
import { capitalizeFirstLetter } from '../../utils/helpers';
import 'react-bootstrap';

function Nav(props) {
    const {
        // tab = [],
        currentTab,
        setCurrentTab,
        tabs
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab);
    }, [currentTab]);
    

    return(
    

        <div className='fluid-container'>
            <nav className={`navbar navbar-dark bg-dark nav`}>
                <div className='container-fluid' aria-current="page">
                    {tabs.map((selection) => {
                        console.log(selection)
                        return (
                        <li className='' key={selection}>
                            <a href={`#${selection}`} 
                                    onClick={() => setCurrentTab(selection)}
                               className={`${currentTab === selection ? 'btn btn-light text-dark' : ''}  navbar-brand`}
                                >
                                    <span
                                    onClick={() => {
                                        setCurrentTab(selection);
                                    }}
                                    >

                                    </span>
                                {selection}
                                
                            </a>
                        </li>
                        )
                    })}
                </div>
              
            </nav>
        </div>
    );
}

export default Nav;