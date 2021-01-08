import React from 'react';
import { CtaButton } from '../../globalStyles';
import { 
    NavBox,
    NavItemsContainer,
    NavItem,
    NavLink,
    NavText,
    ResumeLink
} from './Navbar.elements';
import { 
    IoPersonOutline,
    IoFolderOutline,
    IoBulbOutline,
    IoDocumentTextOutline,
    
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
                        <IoFolderOutline />
                        <NavText>Work</NavText>
                    </NavLink>
                </NavItem>
                <NavItem title="Work">
                    <NavLink to="/concepts">
                        <IoBulbOutline />
                        <NavText>Concepts</NavText>
                    </NavLink>
                </NavItem>
                <NavItem title="Resume">
                    <ResumeLink href="https://docs.google.com/document/d/1GDd_g6b8E3oKefYWUeWu5siAUQWJ_8DKj5ng_F2D4z8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <IoDocumentTextOutline />
                        <NavText>Resume</NavText>
                    </ResumeLink>
                </NavItem>
                

            </NavItemsContainer>

            <CtaButton>Let's Talk</CtaButton>
        </NavBox>
        
    )
};

export default Navbar;
