import React from 'react';
// useEffect here for something
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {tab} = props;

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
                            <a href={`#${selection}`} >
                                {/* <span onClick={() => {

                                }}></span> */}
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