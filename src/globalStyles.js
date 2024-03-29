import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        // Colors
        --red-main: 186, 24, 27;
        --red-light: 229, 56, 59;
        --red-dark: 164, 22, 26;
        --grey-light: 245, 243, 244;
        --grey-dark: 151, 136, 135;
        --white: 250, 250, 250;
        --black: 22, 26, 29;
        // --black-dark: 11, 9, 10;

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
        background-color: rgba(var(--black), 0.9);
        color: rgb(var(--white));
    }

    a { 
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: .5rem;
        background-color: rgb(var(--black));
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5rem;
        background-color: rgb(var(--red-main));
        box-shadow: var(--bs-raised);
    }

    ::selection {
        background: rgb(var(--red-main));
        color: rgb(var(--grey-light));
    }
`;

export const MainContainer = styled.div`
	display: grid;
	grid-template-columns:
		[full-start] minmax(3rem, 1fr) [center-start] repeat(
			8,
			[col-start] minmax(min-content, 18rem) [col-end]
		)
		[center-end] minmax(3rem, 1fr) [full-end];
	grid-template-rows: 8rem 100vh repeat(3, min-content);
`;

// TYPOGRAPHY

export const MainHeading = styled.h1`
	letter-spacing: 0.35rem;
	font-weight: 300;
	font-size: clamp(2rem, 4vw, 3.2rem);
	text-transform: uppercase;
	margin-bottom: 2rem;
	padding: 1rem 0;
	color: ${(props) => (props.darkText ? "rgb(var(--black))" : "inherit")};
`;

export const SubHeading = styled.h3`
	letter-spacing: 0.3rem;
	font-size: 1.8rem;
	font-weight: 400;
	margin-bottom: 1rem;
	padding: 1rem 0.5rem;
`;

export const zoomInFromCenter = keyframes`
    0% {  transform: scale(0);}
    100% { transform: scale(1); opacity: 1}
`;

export const enterFromBelow = keyframes`
    0% { transform: translateY(80%);}
    100% { opacity: 1; transform: translateY(0)};
`;

export const changeOpacity = keyframes`
    100% {
        opacity: 1;
    }
`;

export default GlobalStyles;
