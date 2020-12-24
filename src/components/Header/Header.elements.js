import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const HeaderBox = styled.header`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 9999;
`;

export const HeaderItemsWrapper = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 8rem;
`;