import React from 'react';
import { imageData } from './Data';
import { 
    Navbar
} from '../../components';

const HomePage = () => {

    const { logo, altLogo } = imageData;

    return (
        <React.Fragment>
            <Navbar logo={logo} altLogo={altLogo} />
            

        </React.Fragment>
    );
}

export default HomePage;