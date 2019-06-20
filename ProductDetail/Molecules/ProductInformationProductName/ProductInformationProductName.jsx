import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Border,Wrapper, Title, Description } from './ProductInformationProductName.style';

const ProductInformationProductName = (props) => {
    return (
        <Border className="mb-20">
        <div className="mb-10  Bottomborder">
            <Title>{props.product}</Title>
            <Description>{props.productName}</Description>
            <Wrapper>
                <div>{props.rating}<span><i className="icon-star"><FaStar /></i></span></div>
            </Wrapper>
        
        </div>
        </Border>
    )
}

export default ProductInformationProductName;