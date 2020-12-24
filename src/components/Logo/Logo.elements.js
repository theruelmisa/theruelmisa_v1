import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LogoBox = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const LogoIcon = styled.img`
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
`;

export const LogoText = styled.h1`
    font-size: 2.8rem;
`;
