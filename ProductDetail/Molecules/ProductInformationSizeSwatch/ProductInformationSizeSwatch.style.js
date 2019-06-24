import styled from 'styled-components';

export const Swatchbutton = styled.button`
    background-color: #FFFFFF;
    border: 1px solid #BFC0C6;
    padding: 0;
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    color: #282C3F;
    flex: 0 0 auto;
    position: relative;

    &:hover
    &:.active {
        background-color: red;
        
    }
`