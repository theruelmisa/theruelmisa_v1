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
    cursor: pointer;
    padding: 1rem;
`;

export const LogoImg = styled.img`
    height: 3.5rem;
`;


