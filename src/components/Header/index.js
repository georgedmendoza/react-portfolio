import React from 'react';
import coverImage from '../../assets/cover/background.png'

function Header() {
    return(
        <section>
            <h1>Hello</h1>
            <img src={coverImage} style={{ width: '100%' }} alt='cover' />
        </section>
    )
}

export default Header;