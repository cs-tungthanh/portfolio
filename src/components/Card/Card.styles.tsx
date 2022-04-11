import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    font-family: "Nunito";
    font-weight: 400;
    background-color: #bad1c0;
    margin: 5px;
    padding: 10px;
    .card-header-wrapper {
        display: flex;
        align-items: center;
        .card-header-title {
            font-size: 1.2rem;
            font-weight: 800;
        }
        .card-header-icon {
            font-size: 20px;
            margin: 5px 10px;
        }
    }
    ul {
        margin: 0 10px;
    }
`;
