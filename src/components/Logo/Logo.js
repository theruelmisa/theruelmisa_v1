import React from 'react';
import { 
    LogoBox,
    LogoIcon
} 
from './Logo.elements';


const Logo = ({ logo, logoAlt}) => {
    return (
        <LogoBox to="/" >
            <LogoIcon src={logo} alt={logoAlt} title="Ruel Misa Logo"/>
        </LogoBox>
    )
};

export default Logo;
