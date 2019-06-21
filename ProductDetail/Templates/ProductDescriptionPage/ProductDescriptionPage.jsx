import React, { useState,useEffect } from 'react';
import { connect } from '@lowes/helix-state';
import { getTextData } from '../../../../actions/dataActions'
import ProductInformationAddToCart from '../../Molecules/ProductInformationAddToCart/ProductInformationAddToCart';
import ProductInformationWhishlist from '../../Molecules/ProductInformationWhishlist/ProductInformationWhishlist';
import ProductInformationSizeSwatch from '../../Molecules/ProductInformationSizeSwatch/ProductInformationSizeSwatch';
import ProductInformationProductLookup from '../../Molecules/ProductInformationProductLookup/ProductInformationProductLookup'
import ProductInformationProductName from '../../Molecules/ProductInformationProductName/ProductInformationProductName';
import ProductInformationProductPrice from '../../Molecules/ProductInformationProductPrice/ProductInformationProductPrice';
import ProductInformationProductBroadView from '../../Molecules/ProductInformationProductBroadView/ProductInformationProductBroadView';
import ProductInformationBestOffers from '../../Molecules/ProductInformationBestOffers/ProductInformationBestOffers';
import ProductInformationProductDetails from '../../Molecules/ProductInformationProductDetails/ProductInformationProductDetails';
import PDPProductSuggestions from '../../Organism/PDPProductSuggestions/PDPProductSuggestions';

export const ProductContext = React.createContext({})
const ProductContextProvider = ProductContext.Provider;

const ProductDescriptionPage = (props) => {
    const[currentImage, changeImage] = useState(0);
    
    useEffect(() => {
        props.fetchData();

    }, []);
    
    const { data: { products = [] } = {} } = props;
    return (

        <div className="container medium">
            <div className="row">
                {products.map((product, index) =>
                <>
                    <div className="col-md-8-12" >
                            <ProductInformationProductBroadView image={product.images[currentImage].src} key={index} />
                        <div className="row" >
                        {product.images.map((image, index) => (
                            <ProductInformationProductLookup image={image} click={() => changeImage(index)} key={index} />
                        ))}
                        </div>
                    </div>
                    <div className="col-md-4-12">
                        <ProductInformationProductName product={product.product} productName={product.productName} rating={product.rating} />
                        <ProductInformationProductPrice price={product.price} mrp={product.mrp} discountDisplayLabel={product.discountDisplayLabel} />
                        <ProductInformationSizeSwatch text={product.sizes} />
                        <ProductInformationAddToCart />
                        <ProductInformationWhishlist />
                        <ProductInformationBestOffers offers={product.offers}/>
                        <ProductInformationProductDetails details={product.productDetails} />
                    </div>
                </>    
                )}
            </div>
            <div className="row">
                {products.map(product => (
                    product.category === 'Tshirts' ?
                    <ProductContextProvider value={{image: product.searchImage, name: product.product, price: product.price}}>
                    <PDPProductSuggestions /> 
                    </ProductContextProvider>
                    : null
                ))}
                
                {/* <ProductSuggestionsProductTile /> */}
            </div>
        </div>
    )
}

const checkRender = () => {

}

const mapStateToProps = (state) => {
    return {
        data: state.globalapiReducer
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => getTextData(dispatch)
})

const ProductDescriptionPageData = connect(ProductDescriptionPage, checkRender,
    mapStateToProps,
    mapDispatchToProps)

export default ProductDescriptionPageData;
