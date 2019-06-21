import React from 'react';
// import { Btn } from './Button.styles';
import styled from 'styled-components';


const Button = (props) => {
        const Btn = styled.button`
                border-radius: 0px;
                padding: 12px 15px;
                min-width: 108px;
                font-weight: 500;
                cursor: pointer;
                background: ${props.type === 'primary' ? "#ff3e6c" : "fff"};
                border: 1px solid #ff3e6c;
                color: ${props.type === 'primary' ? "#fff" : "black"};
                flex: 3;
                text-align: center;
                width: 100%;
                margin-right: 3%;
                margin-bottom: 20px;
`;
        return (
                <Btn>{props.children ? props.children : null} {props.text}</Btn>)
}

export default Button;
