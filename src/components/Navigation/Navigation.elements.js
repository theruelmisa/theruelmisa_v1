import styled, { css } from 'styled-components';

const mobileMenu = css`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.3s ease;
    background-color: rgb(var(--red-main));    
    font-size: 2rem;

    & > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 5rem;

        &:hover {
            color: rgb(var(--grey-light));
        }
    }
`;


export const NavMenu = styled.ul`
    flex: ${({ navType }) => navType === 'header' ? '0 0 15%' : 'inherit'};
    display: flex;
    align-items: center;
    justify-content: ${ props => props.navType === 'header' ? 'space-between' : 'flex-start'};

    padding: 2rem;
    font-size: 1.4rem;

    @media screen and (max-width: 768px) {
        ${({ navType }) => (navType === 'header' ? mobileMenu : null )};
    }
`;

export const NavItems = styled.li`
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        color: ${({click}) => ( click ? 'rgb(var(--black))' : 'rgb(var(--red-light))')};
    }

    & .active {
        color: ${({click}) => ( click ? 'none' : 'rgb(var(--red-main))')};
    }

    &:not(:first-of-type) {
        margin-left: ${({click}) => ( click ? '0' : '1.5rem')};
    }
`;

export const NavLinks = styled.a`
    font-size: 2rem;

    

    &:visited {
        color: inherit;
    }
`;

export const MobileIcon = styled.div`
    margin-top: 1.5rem;
    display: none;
    position: relative;
    z-index: 100;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 1.6rem;
        cursor: pointer;
    }

    & > span {
        display: inline-block;
        width: 2rem;
        height: 2px;
        background-color: ${props => props.click ? 'transparent' : 
            props.showHeader ? 'rgb(var(--black))' : 'rgb(var(--grey-light))'};

        &::before, &::after {
            content: '';
            position: absolute;
            left: auto;
            right: 0;
            display: inline-block;
            width: 2.5rem;
            height: 2px;
            background-color: ${props => props.showHeader ? 'rgb(var(--black))' : 'rgb(var(--grey-light))'};
            transition: all .3s ease;

        }

        &::before { 
            top: ${({click}) => click ? '0' : '-0.8rem'};
            transform: ${({ click }) => click ? 'rotate(135deg)' : 'none'};
        }
        &::after {
            top: ${({click}) => click ? '0' : '0.8rem'};
            transform: ${({ click }) => click ? 'rotate(-135deg)' : 'none'};
        }

        // TODO FINISH STYLING LATER
    }
`;