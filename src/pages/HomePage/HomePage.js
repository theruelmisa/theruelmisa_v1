import React from 'react';
import { imageData } from './Data';
import { 
    Header,
    Footer 
} from '../../components';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header logo={imageData.logo} logoAlt={imageData.logoAlt} />
            <div>
                <h1>Ruel Misa.</h1>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;