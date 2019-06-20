import React from 'react';
import {ProductPrice} from './ProductInformationProductPrice.style'
import { RS,disclaimer } from '../../locales/en-us';

const ProductInformationProductPrice = (props) => {
    return (
        <ProductPrice>
            <div>
                <span className="price">{RS}{props.price}</span>
                <span className="mrp">{RS}{props.mrp}</span>
                <span className="discountDisplayLabel">{props.discountDisplayLabel}</span>
            </div>
            <p className="disclaimer">{disclaimer}</p>
        </ProductPrice>
    )
}

export default ProductInformationProductPrice;