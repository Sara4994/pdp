import React from 'react';
import { Swatchbutton } from './ProductInformationSizeSwatch.style';

const ProductInformationSizeSwatch = ({ text }) => {
    let temp = [];
    temp = text.split(",");
    console.log(temp)
    return (
        <>
            {temp.map((t,index) => 
            <Swatchbutton key={index}>{t}</Swatchbutton>
            )}
        </>
    )



}

export default ProductInformationSizeSwatch;