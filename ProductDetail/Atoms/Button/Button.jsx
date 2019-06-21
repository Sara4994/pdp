import React from 'react';
// import { Btn } from './Button.styles';
import styled from 'styled-components';


const Button = (props) => {
        const Btn = styled.button`
border-radius: 0px;
padding: ${props.type ==='accordion'? "0" : "12px 15px"};
min-width: 108px;
font-weight: 500;
cursor: pointer;
background: ${props.type === 'primary' ? "#ff3e6c" : "fff"};
border: ${props.type ==='accordion'? "0" : "1px solid #ff3e6c"};
color: ${props.type === 'primary' ? "#fff" : "black"};
flex: 3;
text-align: ${props.type ==='accordion'? "left" : "center"};
width: 100%;
margin-right: 3%;
margin-bottom: 20px;
text-transform: uppercase;
`;
        return(
        <Btn onClick={props.click}>{props.children? props.children: null} {props.text}</Btn> )       
}

export default Button;
