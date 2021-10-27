import React from 'react';
// useEffect here for something
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {selection} = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(tabOptions)
    // })

    return(
        <header>
            <h2>George</h2>

            <nav>
                <ul className='flex-row'>
                    {selection.map((tab) => (
                        <li className='mx-2 navActive' key={tab}>
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