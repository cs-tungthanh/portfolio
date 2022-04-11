import styled from 'styled-components';

export const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .app-header {
        height: 40px;
        padding: 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: darksalmon;
    }
    .app-body{
        width: 100%;
        height: 100%;
    }
`;
