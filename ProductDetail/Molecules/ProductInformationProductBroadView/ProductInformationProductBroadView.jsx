import React from 'react';


const ProductInformationProductLookup = (props) => {
    const widthStyle = {
        width: '100%'
    }
    return (
        <div className="row mb-10" style={{border: '0.25px solid #d4d5d9'}}>
            <div className="col-md-10-12" style={{ display: 'inline-block', margin: '0 auto 20px auto' }}>
                <img src={props.image} onClick={props.click} style={widthStyle} />
            </div>
        </div>
    )

}
export default ProductInformationProductLookup;