import React from 'react';
import { 
    LogoBox,
    LogoIcon,
    LogoText 
} 
from './Logo.elements';


const Logo = ({ logo, logoAlt}) => {
    return (
        <LogoBox to="/" >
            <LogoIcon src={logo} alt={logoAlt} />
            <LogoText>Ruel Misa</LogoText>
        </LogoBox>
    )
};

export default Logo;
