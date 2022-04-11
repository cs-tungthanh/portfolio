import styled from 'styled-components';

export const StyledAbout = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    padding: 10px 50px;
    display: flex;
    flex-direction: row;
    .chapter-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-transform: uppercase;
        font-family: 'Lemon';
        margin: 5px;
        padding: 10px 15px;
        font-weight: bold;
        font-size: 1.5rem;
        hr {
            border: 1px solid #000;
            flex-grow: 1;
        }
    }
`;
