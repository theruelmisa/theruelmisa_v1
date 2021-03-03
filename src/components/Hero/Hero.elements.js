import styled from 'styled-components';
import { MainHeading, SubHeading } from '../../globalStyles';

export const HeroContainer = styled.div`
    grid-column: full-start / full-end;

    display: grid;
    grid-template-columns: [full-start] minmax(3rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 18rem) [col-end]) [center-end] minmax(3rem, 1fr) [full-end];
    align-items: center;
    justify-items: start;

    /* background-color: var(--red-main);
    color: var(--grey-light); */
`;

export const IntroBox = styled.div`
    grid-column: center-start / center-end;

    @media screen and (max-width: 960px) {
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
    border: 1.5px solid rgb(var(--black));
    border-radius: 0.7rem;
    background-color: inherit;

    transition: all .3s ease;

    &:hover {
        background-color: rgb(var(--red-main));
        color: rgb(var(--grey-light));
        border-color: rgb(var(--red-main));
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
    background-color: rgb(var(--red-light));
    margin: 1rem 0;
    clip-path: polygon(50% 70%, 0 0, 100% 0);
`;