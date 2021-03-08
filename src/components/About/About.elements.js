import styled from 'styled-components';
import { SubHeading } from '../../globalStyles';

export const AboutContainer = styled.section`
    grid-column: full-start / full-end;
    background-color: rgb(var(--grey-light));
    padding: 5rem 12%;

    /* @media screen and (max-width: 1440px) {
    } */

    @media screen and (max-width: 960px) {

        & > h1 {
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        & * {
            text-align: center;
        }
    }
`;

export const ContentBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    color: rgb(var(--black));

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 3rem;
    }

`;

export const AboutContent = styled.div`
`;

export const StoryBox = styled.div`
    margin-bottom: 2rem;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    letter-spacing: .1rem;

    & > p {

        &:not(:last-of-type) {
            margin-bottom: 2rem;
        }
    }
`;

export const AboutSubheading = styled(SubHeading)`
    padding: 1rem 0;
    font-size: clamp(1.4rem, 2vw, 2rem);
    font-weight: 700;
    color: rgb(var(--grey-dark));
`;

export const SkillsBox = styled.div`
    margin-bottom: 1rem;
`;

export const Skills = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
    text-align: center;

    font-size: clamp(1.2rem, 2vw, 1.3rem);

    & > li {

        /* border: 1px solid rgb(var(--red-light)); */
        background-color: rgb(var(--red-main));
        color: rgb(var(--grey-light));
        border-radius: .5rem;
        padding: .5rem 1rem;
        box-shadow: var(--bs-light);
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

export const ContactTitle = styled(SubHeading)`
    font-size: clamp(1.4rem, 2vw, 2rem);
    font-weight: 700;
    color: rgb(var(--red-main));
    margin-bottom: 1.5rem;
`;  

export const ContactDetails = styled.ul`
    padding: 1rem 2rem;
    font-size: clamp(1rem, 2vw, 1.2rem);


    & > li {
        display: flex;
        align-items: center;
        padding: .5rem 2rem;

        & > svg {
            font-size: clamp(1.3rem, 2vw, 1.6rem);
            color: rgb(var(--grey-dark));
        }

        & > span {
            margin-left: 1rem;
            letter-spacing: .15rem;
        }

        &:not(:last-of-type) {
            margin-bottom: 2rem;
        }
    }
`;