import React from 'react';
import { Logo } from '../../components';
import { CtaButton } from '../../globalStyles';
import { 
    NavBox,
    NavItemsContainer,
    NavItem,
    NavLink,
    NavText,
    SocialLink, 
    SocialItemsContainer,
    SocialItem,
    ResumeLink
} from './Navbar.elements';
import { 
    IoPersonOutline,
    IoAlbumsOutline,
    IoDocumentTextOutline,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoBehance
} from "react-icons/io5";

const Navbar = ({ logo, altLogo }) => {
    return (
        <NavBox>
            <NavItemsContainer>
                <NavItem title="About">
                    <NavLink to="/about">
                        <IoPersonOutline />
                        <NavText>About</NavText>
                    </NavLink>
                </NavItem>
                <NavItem title="Work">
                    <NavLink to="/work">
                        <IoAlbumsOutline />
                        <NavText>Work</NavText>
                    </NavLink>
                </NavItem>
                
                <NavItem title="Resume">
                    <ResumeLink href="https://docs.google.com/document/d/1GDd_g6b8E3oKefYWUeWu5siAUQWJ_8DKj5ng_F2D4z8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <IoDocumentTextOutline />
                        <NavText>Resume</NavText>
                    </ResumeLink>
                </NavItem>
                

            </NavItemsContainer>
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

            <CtaButton>Let's Talk</CtaButton>
        </NavBox>
        
    )
};

export default Navbar;
