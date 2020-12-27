import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavBox = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    /* box-shadow: var(--bs-light); */
    border-right: 1px solid #3c3c3c;
`;

export const NavItemsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavItem = styled.li`
    height: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        color: var(--secondary-color);
    }

    /* @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    } */
`;

export const NavLink = styled(Link)`
    font-size: 2rem;
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

export const SocialLink = styled.a`
    font-size: 2rem;
    padding: 0.5rem 1.5rem;
    height: 100%;
`;

