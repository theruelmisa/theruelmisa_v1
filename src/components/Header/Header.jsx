import React from 'react'

import Logo from '../../assets/main-logo-md.svg';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="RM logo" height={30} />
        </header>
    )
}

export default Header;
