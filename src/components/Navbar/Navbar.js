import React from 'react';
import { Logo } from '../../components';
import { 
    NavBox,
    NavItemsContainer,
    NavItem,
    NavLink,
    NavText,
    SocialLink 
} from './Navbar.elements';
import { 
    IoHomeOutline,
    IoPersonOutline,
    IoAlbumsOutline,
    IoDocumentTextOutline,
    IoLogoLinkedin,
    IoLogoGithub
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
                    <NavLink to="/resume">
                        <IoDocumentTextOutline />
                        <NavText>Resume</NavText>
                    </NavLink>
                </NavItem>
                

            </NavItemsContainer>
            <NavItemsContainer>
                <NavItem title="Resume">
                    <SocialLink target="_blank" href="">
                        <IoLogoLinkedin />
                    </SocialLink>
                </NavItem>
            </NavItemsContainer>

            <p>Let's Talk</p>
        </NavBox>
        
    )
};

export default Navbar;
