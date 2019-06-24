import styled from 'styled-components';

export const ProductTile = styled.div`
    .item-container {
        text-decoration: none;
        border: 0.25px solid #d4d5d9;
        display: inline-block;
        padding: 5px;
        width: 212px;
        color: #000;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 2px 16px 4px rgba(40, 44, 63, 0.07);
        }
    }
`;