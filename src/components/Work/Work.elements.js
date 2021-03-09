import styled from 'styled-components';

export const WorkContainer = styled.section`
    grid-column: full-start / full-end;
    padding: 5rem 12%;
    background-color: rgb(var(--red-light));

    & > h1 {
        margin-bottom: 5rem;
    }

    @media screen and (max-width: 1440px) {
        padding: 3rem;
    }

    @media screen and (max-width: 960px) {
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;

        & > h1 {
            text-align: center;
        }
    }
`;

export const WorkItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;