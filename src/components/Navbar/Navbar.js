import React from 'react';
import { 
    NavBox,
    NavItemsContainer,
    NavItem,
    NavLink 
} from './Navbar.elements';

const Navbar = () => {
    return (
        <NavBox>
            <NavItemsContainer>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">Work</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects">Contact</NavLink>
                </NavItem>

            </NavItemsContainer>
        </NavBox>
        
    )
};

export default Navbar;
