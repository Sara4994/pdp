import React, { useState, useEffect } from 'react';
import { connect } from '@lowes/helix-state';
import { getTextData } from '../../../../actions/dataActions'
import { ProductDescriptionPageStyle, CarouselStyling } from './ProductDescriptionPage.style';
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
import Button from '@lowes/button';

export const ProductContext = React.createContext({})
const ProductContextProvider = ProductContext.Provider;

const ProductDescriptionPage = (props) => {
    const [currentImage, changeImage] = useState(0);

    useEffect(() => {
        props.fetchData();

    }, []);

    const { data: { products = [] } = {} } = props;
    return (
        <>
        
            {products.map((product, index) =>
            <ProductDescriptionPageStyle>
                <div className="row pdp-detail">
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
                        <ProductInformationBestOffers offers={product.offers} />
                        <ProductInformationProductDetails details={product.productDetails} />
                    </div>
                </div>
            </ProductDescriptionPageStyle>
            )}
            <CarouselStyling> 
            <div className="row carousel-container">
            <Button className="left-arrow"> {'<'} </Button>
                {products.map(product => (
                    product.category === 'Tshirts' ?
                        <ProductContextProvider value={{ image: product.searchImage, name: product.product, price: product.price }}>
                            <PDPProductSuggestions />
                        </ProductContextProvider>
                        : null
                ))}
                  <Button className="right-arrow"> {'>'} </Button>
                {/* <ProductSuggestionsProductTile /> */}
            </div>
            </CarouselStyling>
        </>
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