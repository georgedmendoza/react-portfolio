import React, { useEffect } from 'react';
// useEffect here for something
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    const tabOptions = ['about me','portfolio', 'contact', 'resume']

    useEffect(() => {
        document.title = capitalizeFirstLetter(tabOptions)
    })

    return(
        <header>
            <h2>George</h2>

            <nav>
                <ul>
                    {tabOptions.map((tab) => (
                        <li key={tab}>
                            <a href={`#${tab}`} >
                                {/* <span onClick={() => {

                                }}></span> */}
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;