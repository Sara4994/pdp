import React from 'react';
import {ProductPrice} from './ProductInformationProductPrice.style'
import { Currency,disclaimer } from '../../locales/en-us';

const ProductInformationProductPrice = (props) => {
    return (
        <ProductPrice>
            <div>
                <span className="price">{Currency}{props.price}</span>
                <span className="mrp">{Currency}{props.mrp}</span>
                <span className="discountDisplayLabel">{props.discountDisplayLabel}</span>
            </div>
            <p className="disclaimer">{disclaimer}</p>
        </ProductPrice>
    )
}

export default ProductInformationProductPrice;