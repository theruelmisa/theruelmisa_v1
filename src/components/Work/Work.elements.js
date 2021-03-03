import styled from 'styled-components';

export const WorkContainer = styled.div`
    grid-column: full-start / full-end;
    
    padding: 5rem 10rem;

    border: 1px solid red;

    @media screen and (max-width: 1440px) {
        padding: 3rem;
    }

    @media screen and (max-width: 960px) {
        padding: 2rem;
    }
`;