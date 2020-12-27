import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LogoBox = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


export const LogoIcon = styled.img`
    cursor: pointer;
    width: 6rem;
    height: 6rem;
    margin: 1rem;
`;
