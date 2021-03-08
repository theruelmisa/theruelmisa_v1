import React from 'react'
import Navigation from '../Navigation/Navigation';
import { FooterContainer, Copyright } from './Footer.elements';

const Footer = () => {

    return (
        <FooterContainer>
            <Navigation navType="social"/>

            <Copyright>
                <p>Copyright &copy; {new Date().getFullYear()} | Ruel Misa. All Rights Reserved.</p>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer;
