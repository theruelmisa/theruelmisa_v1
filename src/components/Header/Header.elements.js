import styled from 'styled-components';

export const HeaderContainer = styled.header`
    grid-column: full-start / full-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    padding: 1rem 10rem;
    transition: all .5s ease-in;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    background-color: ${({ showHeader }) => ( showHeader ? 'rgba(var(--grey-light),1)' : 'inherit')};
    color: ${({ showHeader }) => ( showHeader ? 'rgba(var(--black),1)' : 'inherit')};

    @media screen and (max-width: 1440px) {
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 960px) {
        padding: 1rem;
    }
`;

export const LogoBox = styled.div`
    padding: 1rem;
`;

export const LogoImg = styled.img`
    height: 3.5rem;
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
