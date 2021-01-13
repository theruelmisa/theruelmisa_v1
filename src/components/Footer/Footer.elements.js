import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    padding: 2rem 5rem;
    background-color: transparent;
`;

export const CopyrightBox = styled.div`
    padding: 1rem 1.5rem;
`;

export const CopyrightText = styled.p`
    color: var(--light-gray);
    font-size: 1.2rem;
    width: 25rem;
    letter-spacing: .1rem;
`;

export const SocialMediaBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
`;

export const SocialMediaText = styled.p`
    color: var(--secondary-color);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .2rem;
    padding: .5rem 1rem;
    margin-bottom: 1rem;

    animation: slidein 3s infinite;

    @keyframes slidein {
        0% {
            margin-left: 100%;
            width: 300%;
            opacity: 0;
        }

        50% {
            margin-left: 0%;
            width: 50%;
            opacity: 1;
        }

        100% {
            margin-left: 200%;
            width: 50%;
            opacity: 0;
        }

    }
`;


export const SocialItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const SocialItem = styled.li`
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 5rem;
    

    transition: all .3s ease-in;

    &:hover { 
        color: var(--primary-color);
        background-color: var(--secondary-color);
    }
`;

export const SocialLink = styled.a`
    font-size: 2.4rem;
`;