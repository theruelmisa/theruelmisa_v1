import React from 'react';
import { imageData } from './Data';
import { PageContainer } from '../../globalStyles';
import { 
    Logo,
    Intro,
    Navbar,
    Footer
} from '../../components';

const HomePage = () => {

    const { logo, altLogo } = imageData;

    return (
        <PageContainer>
            <Logo logo={logo} altLogo={altLogo} />
            <Intro />
            <Navbar />
            <Footer />
        </PageContainer>
    );
}

export default HomePage;