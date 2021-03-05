import styled from 'styled-components';

export const AboutContainer = styled.section`
    grid-column: full-start / full-end;
    background-color: rgb(var(--grey-light));
    padding: 5rem 12%;
    border: 1px solid red;
`;

export const ContentBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: rgb(var(--black));
    border: 1px solid red;
`;