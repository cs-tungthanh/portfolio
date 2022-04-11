import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .col{
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-basis: 0;
        max-width: 100%;
    }
`;
