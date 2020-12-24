import React from 'react';
import { HeaderBox, HeaderItemsWrapper } from './Header.elements';
import { Navbar, Logo } from '../../components';


const Header = ({ logo, logoAlt }) => {
    return (
        <HeaderBox>
            <HeaderItemsWrapper>
                <Logo logo={logo} logoAlt={logoAlt} />
                <Navbar />
            </HeaderItemsWrapper>
        </HeaderBox>
    )
};

export default Header;
