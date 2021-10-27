import React from 'react';
// useEffect here for something
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const tab = ['About me','Portfolio','Contact','Resume']
    const {setCurrentTab} = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(tabOptions)
    // })

    return(
        <header>
            <h2>George</h2>

            <nav>
                <ul className='flex-row'>
                    {tab.map((selection) => (
                        <li className='mx-2 navActive' key={tab}>
                            <a href={`#${selection}`} 
                                    onClick={() => setCurrentTab(tab)}>
                                {/* <span ></span> */}
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