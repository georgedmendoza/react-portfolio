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
    

        <div className='fluid-container'>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    {tabs.map((selection) => (
                        <li className='' key={selection}>
                            <a href={`#${selection}`} 
                                    onClick={() => setCurrentTab(selection)}
  
                               className='navbar-brand'
                                >
                                {selection}
                                
                            </a>
                        </li>
                    ))}
                </div>
              
            </nav>
        </div>
    );
}

export default Nav;