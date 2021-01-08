import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --primary-color: #e55800;
        --secondary-color: #ff914c;
        --white: #FAFAFA;
        --light-grey: #e5e5e5;
        --dark-grey: #b3b3b3;
        --black: #2b2b2b;
        --black-darker: #232323;


        --bs-light: 1px 3px 10px rgba(0, 0, 0, .25);
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

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 10rem;
    position: relative;
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    border: 2px solid var(--primary-color);
    border-radius: .8rem;
    background: var(--primary-color);
    color: var(--white);
    transition: all .25s ease-in;

    box-shadow: var(--bs-light);

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: var(--bs-raised);
        transform: translateY(-1rem);
    }

    &:active {
        transform: translateY(-.5rem);
        box-shadow: var(--bs-medium);
    }
`;

export const CtaButton = styled(Button)`
    background-color: transparent;


    &:hover {
        border-color: var(--secondary-color);
        background-color: var(--secondary-color);
        color: var(--black);
    }

    
`;

export const TextEmphasis = styled.span`
    color: var(--primary-color);
    font-family: 'Montserrat', sans-serif;
`;


export default GlobalStyles;




