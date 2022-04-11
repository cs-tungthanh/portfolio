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
    .app-body {
        width: 100%;
        height: 100%;
    }
    .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .col {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
    }
    .double-col {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
    }
    @media screen and (min-width: 800px) {
        .col {
            flex: 1;
        }
        .double-col {
            flex: 2;
        }
    }
    .border {
        border-radius: 5px;
        border: 0.2px solid rgba(0, 0, 0, 0.1);
    }
    .yellow-bg {
        background-color: yellow;
    }
    .blue-bg {
        background-color: blue;
    }
`;
