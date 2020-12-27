import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --primary-color: #e55800;
        --secondary-color: #ff914c;
        --white: #FAFAFA;
        --light-grey: #e5e5e5;
        --dark-grey: #b3b3b3;
        --black: #2b2b2b;


        --bs-light: 1px 3px 10px rgba(0, 0, 0, .25);
    }

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
        background: var(--black);
        color: var(--white);
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
    margin: 0 auto;
    padding: 0 5rem; 

    @media screen and (max-width: 991px) {
        padding: 0 3rem; 
    };
`;


export default GlobalStyles;




