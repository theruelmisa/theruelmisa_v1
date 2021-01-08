import React from 'react';
import { 
    FooterContainer,
    CopyrightBox,
    CopyrightText,
    SocialMediaBox,
    SocialMediaText,
    SocialItemsContainer,
    SocialItem,
    SocialLink 
} from './Footer.elements';
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoBehance
} from "react-icons/io5";
import { TextEmphasis } from '../../globalStyles';


const Footer = () => {

    const currentYear = new Date().getFullYear();


    return ( 
        <FooterContainer>
            <CopyrightBox>
                <CopyrightText>
                    Copyright &copy; {currentYear} | All rights reserved | powered by <TextEmphasis>RM!</TextEmphasis> 
                </CopyrightText>
            </CopyrightBox>
            <SocialMediaBox>
                <SocialMediaText>
                    Follow me 
                </SocialMediaText>
                <SocialItemsContainer>
                    <SocialItem>
                        <SocialLink target="_blank" href="https://github.com/theruelmisa" rel="noopener noreferrer">
                            <IoLogoGithub />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink target="_blank" href="https://www.linkedin.com/in/theruelmisa/" rel="noopener noreferrer">
                            <IoLogoLinkedin />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink target="_blank" href="https://www.instagram.com/rumies.media/" rel="noopener noreferrer">
                            <IoLogoInstagram />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink target="_blank" href="https://www.behance.net/theruelmisa" rel="noopener noreferrer">
                            <IoLogoBehance />
                        </SocialLink>
                    </SocialItem>
                </SocialItemsContainer>
            </SocialMediaBox>
        </FooterContainer>
    );
}

export default Footer;