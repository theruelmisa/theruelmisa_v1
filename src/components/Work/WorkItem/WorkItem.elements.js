import styled from 'styled-components';
import { SubHeading } from '../../../globalStyles';

// TODO: FINISH STYLING OF WORK ITEM CARD

export const Card = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    box-shadow: var(--bs-light);
    font-size: 1.2rem;

    transition: all .2s ease-in;

    &:hover {
        transform: translateY(-1rem);
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;

export const CardText = styled.div`
    background-color: rgb(var(--black));    
    padding: 2rem 3rem;
`;

export const CardTitle = styled(SubHeading)`
    font-size: 2.4rem;
    padding-left: 0;
    padding-right: 0;
`;


export const CardDesc = styled.p`
    margin-bottom: 2rem;
`;

export const Tech = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
`;

export const TechItems = styled.li`
    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

export const LinkBox = styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    font-size: 2.2rem;
`;

export const LinkItems = styled.li`
    transition: all .3s ease-in;   

    &:not(:last-of-type) {
        margin-right: 2rem;
    }

    &:hover {
        color: rgb(var(--red-dark));
    }
`;

export const CardImgBox = styled.figure`
    grid-row: 1 / -1;
    height: 30rem;
    width: 35rem;
    mix-blend-mode: overlay;    

    &:hover {
        mix-blend-mode: normal;
    }

    @media screen and (max-width: 960px) {
        mix-blend-mode: normal;
        height: 100%;
        width: 100%;
    }

`;

export const CardImg = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;
