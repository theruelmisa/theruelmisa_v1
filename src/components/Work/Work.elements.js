import styled from 'styled-components';

export const WorkContainer = styled.div`
    grid-column: full-start / full-end;
    padding: 5rem 12%;
    margin-bottom: 5rem;
    background-color: rgb(var(--red-light));

    & > h1 {
        margin-bottom: 5rem;
    }

    @media screen and (max-width: 1440px) {
        padding: 3rem;
    }

    @media screen and (max-width: 960px) {
        padding: 2rem;

        & > h1 {
            text-align: center;
        }
    }
`;

export const WorkItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;