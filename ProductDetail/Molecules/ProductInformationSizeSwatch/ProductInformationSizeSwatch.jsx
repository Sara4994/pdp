import React, { useState } from 'react';
import { Swatchbutton } from './ProductInformationSizeSwatch.style';

const ProductInformationSizeSwatch = ({ text }) => {
    let sizeList = [];
    sizeList = text.split(",");
    const [active, isActive] = useState('false');
    const clickHandler = () => {
        isActive(!active);
    }
    return (
        <>
            {sizeList.map((size, index) =>
                <Swatchbutton key={index} onClick={clickHandler} className={active ? null : 'active'}>
                    {size}
                </Swatchbutton>
            )}
        </>
    )



}

export default ProductInformationSizeSwatch;