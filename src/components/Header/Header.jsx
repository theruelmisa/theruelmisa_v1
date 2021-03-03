import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import { HeaderContainer, LogoBox, LogoImg, MobileIcon } from './Header.elements';

import Logo from '../../assets/main-logo-md.svg';

const Header = () => {
    const [click, setClick] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        
        window.addEventListener('scroll', handleShowHeader);

        return () => {
            window.removeEventListener('scroll', handleShowHeader);
        };
    }, []);

    const handleClick = () => setClick(!click);

    const handleCloseMenu = () => setClick(false);

    const handleShowHeader = () => {
        if (window.scrollY > 100) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        };
    }

    return (
        <HeaderContainer showHeader={showHeader}>
            <LogoBox onClick={handleCloseMenu}>
                <LogoImg src={Logo} alt="RM logo" />
            </LogoBox>
            {/* <MobileIcon onClick={handleClick}>
                <span>&nbsp;</span>
            </MobileIcon> */}
            <Navigation navType="header" />
        </HeaderContainer>
    )
}

export default Header;
