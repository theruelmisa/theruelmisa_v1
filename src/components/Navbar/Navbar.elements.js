import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBox = styled.nav`
    font-size: 1.4rem;
    align-self: center;
`;

export const NavItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavItem = styled.li`
    height: 8rem;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    /* @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    } */
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    height: 100%;

    /* @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover {
            color: #4b59f7;
            transition: all 0.5s ease;
        }
    } */
`;

