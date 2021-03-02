import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        // Colors
        --red-main: #BA181B;
        --red-light: #E5383B;
        --red-dark: #A4161A;
        --grey-light: #F5F3F4;
        --grey-dark: #D3D3D3;
        --white: #fafafa;
        --black: #161A1D;
        // --black-dark: #0B090A;

        --bs-light: .5px 2px 5px rgba(0, 0, 0, .2);
        --bs-medium: 1px 3px 8px rgba(0, 0, 0, .6);
        --bs-raised: 1.5px 5px 20px rgba(0, 0, 0, .4);
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
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        background-color: var(--white);
        color: var(--black);
    }

    a { 
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: [full-start] minmax(3rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 15rem) [col-end]) [center-end] minmax(3rem, 1fr) [full-end];
    grid-template-rows: 100vh repeat(3, min-content);
`;

// TYPOGRAPHY

export const MainHeading = styled.h1`
    letter-spacing: .2rem;
    font-weight: 300;
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding: 1rem .5rem;
`;

export const SubHeading = styled.h3`
    letter-spacing: .3rem;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
    padding: 1rem .5rem;
`;


export default GlobalStyles;




