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
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className='navbar-nav'>
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
  </div>
</nav> */}

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