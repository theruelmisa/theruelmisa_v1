import styled from 'styled-components';
import { SubHeading } from '../../../globalStyles';

// TODO: FINISH STYLING OF WORK ITEM CARD

export const Card = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    box-shadow: var(--bs-light);

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
    padding: 2rem 1rem;
`;

export const CardTitle = styled(SubHeading)`
    font-size: 2.4rem;

`;


export const CardDesc = styled.p`
    border: 1px solid black;
`;

export const Tech = styled.ul`
    border: 1px solid black;
`;

export const TechItems = styled.li`
    border: 1px solid black;
`;

export const LinkBox = styled.ul`
    border: 1px solid black;
`;

export const LinkItems = styled.li`

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
