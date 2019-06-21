import React from 'react';


const ProductInformationProductLookup = (props) => {
    const widthStyle = {
        width: '100%'
    }
    return (
        <div className="col-md-2-12" style={{ display: 'inline-block',border: '0.25px solid #d4d5d9' }}>
            <img src={props.image.src} onClick={props.click} style={widthStyle} />
        </div>
    )

}
export default ProductInformationProductLookup;