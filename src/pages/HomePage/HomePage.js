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
            <div>
                <h3>Hi there. My name is</h3>
                <h1>
                    <span style={{ color: "orange"}}>R</span>uel <span style={{ color: "orange"}}>M</span>isa. <br />
                    I build things.
                </h1>

                <p>I am a Front End Developer and Graphic Designer based in Brookyln, NY. I specialize in building creative User Interfaces.</p>
                
            </div>
            <Navbar />
        </PageContainer>
    );
}

export default HomePage;