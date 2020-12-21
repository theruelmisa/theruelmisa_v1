import React from 'react';

import { 
    Header,
    Footer 
} from '../../components';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <div>
                <h1>THIS IS THE BODY CONTENT</h1>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;