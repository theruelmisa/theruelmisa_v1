import styled from 'styled-components';
import { MainHeading, SubHeading } from '../../globalStyles';

export const HeroContainer = styled.div`
    grid-column: full-start / full-end;
    display: flex;
    align-items: center;

    /* background-color: var(--red-main);
    color: var(--grey-light); */

    @media screen and (max-width: 960px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const IntroBox = styled.div`
    margin-top: -15%;
    margin-left: 15%;

    @media screen and (max-width: 960px) {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const IntroTitle = styled(MainHeading)`
    font-size: 4rem;
    letter-spacing: 0.4rem;

`;

export const IntroSubtitle = styled(SubHeading)`
    font-size: 2rem;
    letter-spacing: 0.1rem;
`;

export const IntroPara = styled.p`
    padding: 1rem .5rem;
    margin-bottom: 3rem;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    line-height: 2rem;
`;

export const IntroButton = styled.button`
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1rem 2.5rem;
    margin-bottom: 3rem;
    border: 1.5px solid black;
    border-radius: 0.7rem;
    background-color: inherit;

    transition: all .3s ease;

    &:hover {
        background-color: var(--red-main);
        color: var(--grey-light);
        border-color: var(--red-main);
        box-shadow: var(--bs-medium);
    }
`;

export const ScrollerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5%;
    width: 10%;
`;

export const Scroller = styled.div`
    height: 1.2rem;
    width: 1.2rem;
    background-color: var(--red-light);
    margin: 1rem 0;
    clip-path: polygon(50% 70%, 0 0, 100% 0);
`;