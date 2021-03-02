import React from 'react';
import GlobalStyles, { MainContainer } from './globalStyles';
import { Header, Hero, Work, About, Footer } from './components';

const App = () => {
    return ( 
        <>
            <GlobalStyles />
            <Header />
            <MainContainer>
                <Hero />
                <Work />
                <About />
                <Footer />
            </MainContainer>
        </>
    );
}

export default App;