import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 10rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Copyright = styled.div`
    padding: 1rem 0;
    & > p {
        font-size: clamp(1rem, 4vw, 1.2rem);

    }
`;
