import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavBox = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    /* box-shadow: var(--bs-light); */
`;

export const NavItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    border: 2px solid transparent;
    border-top-color: var(--primary-color);
    border-bottom-color: var(--primary-color);
`;

export const NavItem = styled.li`
    cursor: pointer;
    height: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    /* @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    } */
`;


export const NavLink = styled(Link)`
    font-size: 2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
    color: var(--primary-color);
    position: relative;

    & p {
        transition: color .5s ease-out;
    }

    &:hover p {
        color: var(--secondary-color);
    }

    &::before, 
    &::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }

    &::before {
        top: 0;
        left: 0;
    }

    &::after {
        bottom: 0;
        right: 0;
    }

    &:hover::before, 
    &:hover::after {
        width: 100%;
        height: 100%;
        transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
    }

    &:hover::before {
        border-top-color: var(--secondary-color);
        border-right-color: var(--secondary-color);
    }

    &:hover::after {
        border-bottom-color: var(--secondary-color);
        border-left-color: var(--secondary-color);
    }
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

export const ResumeLink = styled.a`
    font-size: 2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
    color: var(--primary-color);
    position: relative;

    & p {
        transition: color .5s ease-out;
    }

    &:hover p {
        color: var(--secondary-color);
    }

    &::before, 
    &::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }

    &::before {
        top: 0;
        left: 0;
    }

    &::after {
        bottom: 0;
        right: 0;
    }

    &:hover::before, 
    &:hover::after {
        width: 100%;
        height: 100%;
        transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
    }

    &:hover::before {
        border-top-color: var(--secondary-color);
        border-right-color: var(--secondary-color);
    }

    &:hover::after {
        border-bottom-color: var(--secondary-color);
        border-left-color: var(--secondary-color);
    }
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

export const NavText = styled.p`
    font-size: 1.6rem;
    color: var(--white);
    margin-left: .5rem;
`;

