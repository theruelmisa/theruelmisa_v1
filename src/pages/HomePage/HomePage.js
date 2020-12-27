import React from 'react';
import { imageData } from './Data';
import { PageContainer } from '../../globalStyles';
import { 
    Logo,
    Navbar
} from '../../components';

const HomePage = () => {

    const { logo, altLogo } = imageData;

    return (
        <PageContainer>
            <Logo logo={logo} altLogo={altLogo} />
            <Navbar />
        </PageContainer>
    );
}

export default HomePage;