import React from 'react';
import { Logo } from '../../components';
import { 
    NavBox,
    NavItemsContainer,
    NavItem,
    NavLink,
    SocialLink 
} from './Navbar.elements';
import { 
    IoHomeOutline,
    IoPersonOutline,
    IoAlbumsOutline,
    IoMailOutline,
    IoDocumentTextOutline,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";

const Navbar = ({ logo, altLogo }) => {
    return (
        <NavBox>
            <Logo logo={logo} altLogo={altLogo} />
            <NavItemsContainer>
                <NavItem title="Home">
                    <NavLink to="/">
                        <IoHomeOutline />
                    </NavLink>
                </NavItem>
                <NavItem title="About">
                    <NavLink to="/about">
                        <IoPersonOutline />
                    </NavLink>
                </NavItem>
                <NavItem title="Work">
                    <NavLink to="/work">
                        <IoAlbumsOutline />
                    </NavLink>
                </NavItem>
                <NavItem title="Contact">
                    <NavLink to="/contact">
                        <IoMailOutline />
                    </NavLink>
                </NavItem>
                <NavItem title="Resume">
                    <NavLink to="/resume">
                        <IoDocumentTextOutline />
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
        </NavBox>
        
    )
};

export default Navbar;
