import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import { HeaderContainer, LogoBox, LogoImg } from './Header.elements';
import { animateScroll as scroll } from 'react-scroll';
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

    const handleShowHeader = () => {
        if (window.scrollY > 100) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        };
    }

    const handleScrollToTop = () => {
        if (click) {
            setClick(false);
        }
        scroll.scrollToTop();
    }

    // IDEA: Try to change color of header when approaching about me

    return (
        <HeaderContainer showHeader={showHeader}>
            <LogoBox onClick={handleScrollToTop}>
                <LogoImg src={Logo} alt="RM logo" />
            </LogoBox>
            <Navigation navType="header" handleClick={handleClick} click={click} showHeader={showHeader} />
        </HeaderContainer>
    )
}

export default Header;
