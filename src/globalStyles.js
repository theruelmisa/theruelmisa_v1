import styled, { createGlobalStyle } from 'styled-components';

// CSS "VARIABLES"

export const styleVariables = {
    // COLOR
    primaryRed: "",
};

const GlobalStyles = createGlobalStyle`

    *, 
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 10px for easier rem sizing
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.4;
    }

    a { 
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 150rem;
    margin: 0 auto;
    padding: 0 5rem; 

    @media screen and (max-width: 991px) {
        padding: 0 3rem; 
    };
`;



export default GlobalStyles;




