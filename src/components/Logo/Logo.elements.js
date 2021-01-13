import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LogoBox = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    box-shadow: var(--bs-light);
    background: var(--midnight-blue);
`;


export const LogoIcon = styled.img`
    cursor: pointer;
    width: 25rem;
    height: 25rem;
    margin: 1rem 2rem;
    padding: 1rem;
    
`;
