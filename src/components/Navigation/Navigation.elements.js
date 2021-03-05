import styled from 'styled-components';

export const Nav = styled.nav`
    flex: 0 0 15%;
    padding: 2rem;
    font-size: 1.4rem;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: ${ props => props.navType === 'header' ? 'space-between' : 'flex-start'};
`;

export const NavItems = styled.li`
    cursor: pointer;

    & .active {
        color: rgb(var(--red-main));
    }
`;

export const NavLinks = styled.a`
    font-size: 2rem;
    &:visited {
        color: inherit;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    position: relative;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 1.6rem;
        cursor: pointer;
    }

    & > span {
        display: inline-block;
        width: 2rem;
        height: 2px;
        background-color: rgb(var(--black));

        &::before, &::after {
            content: '';
            position: absolute;
            left: auto;
            right: 0;
            display: inline-block;
            width: 3rem;
            height: 2px;
            background-color: rgb(var(--black));
        }

        &::before { top: -0.8rem }
        &::after { top: 0.8rem }

        // TODO FINISH STYLING LATER
    }
`;