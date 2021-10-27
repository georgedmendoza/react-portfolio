import React from 'react';
// useEffect here for something
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        // tab = [],
        // currentTab,
        setCurrentTab,
        tabs
    } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(tabOptions)
    // })

    return(
        <header>
            <h2>George</h2>

            <nav>
                <ul className='flex-row'>
                    {tabs.map((selection) => (
                        <li className='mx-2 navActive' key={selection}>
                            <a href={`#${selection}`} 
                                    onClick={() => setCurrentTab(selection)}
  
                               
                                >
                                {selection}
                                
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;