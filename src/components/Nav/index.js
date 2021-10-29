import React from 'react';
// useEffect here for something
// import { capitalizeFirstLetter } from '../../utils/helpers';
import 'react-bootstrap';

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
        <header className=''>
            {/* <h2>George</h2> */}

            <nav className='navbar navbar-expand-lg navbar-dark bg-darnavbar-dark'>
                <div className=''>

                <ul className='flex-row'>
                    {tabs.map((selection) => (
                        <li className='mx-2 navActive danger bold' key={selection}>
                            <a href={`#${selection}`} 
                                    onClick={() => setCurrentTab(selection)}
  
                               className='tab'
                                >
                                {selection}
                                
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;