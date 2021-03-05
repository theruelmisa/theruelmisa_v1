import styled from 'styled-components';
import { SubHeading } from '../../globalStyles';

export const AboutContainer = styled.section`
    grid-column: full-start / full-end;
    background-color: rgb(var(--grey-light));
    padding: 5rem 12%;
    border: 1px solid red;
`;

export const ContentBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    color: rgb(var(--black));
    border: 1px solid red;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 3rem;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactTitle = styled(SubHeading)`
    text-align: center;
    font-size: clamp(1.4rem, 2vw, 2rem);
    font-weight: 700;
    color: rgb(var(--red-main));
    margin-bottom: 2rem;
`;  