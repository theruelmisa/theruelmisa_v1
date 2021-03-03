import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import { HeaderContainer, LogoBox, LogoImg } from './Header.elements';

import Logo from '../../assets/main-logo-md.svg';

const Header = () => {
    const [ showHeader, setShowHeader ] = useState(false);

    useEffect(() => {
        
        window.addEventListener('scroll', handleShowHeader);

        return () => {
            window.removeEventListener('scroll', handleShowHeader);
        };
    }, []);

    const handleShowHeader = () => {
        if (window.scrollY > 100) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        };
    }

    return (
        <HeaderContainer showHeader={showHeader}>
            <LogoBox>
                <LogoImg src={Logo} alt="RM logo" />
            </LogoBox>
            <Navigation navType="header" />
        </HeaderContainer>
    )
}

export default Header;
