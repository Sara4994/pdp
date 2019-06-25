import React, { useContext } from 'react';
import Slider from 'react-slick';
import { ProductTile } from './ProductSuggestionsProductTile.style';
import { ProductContext } from '../../Templates/ProductDescriptionPage/ProductDescriptionPage';
import { Currency } from '../../locales/en-us';
// import '../../../../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css';

const ProductSuggestionsProductTile = (props) => {
    const product = useContext(ProductContext);
    // console.log('context',product)
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4
    // };
    return (
    // <Slider { ...settings }>
            <ProductTile>
                <a href="#" className="item-container slider responsive">
                    <div className="image-container">
                        <img src={ product.image } width="200px" hegith="200px" />
                    </div>
                    <div>
                        <p>{product.name}</p>
                        <p>{Currency} {product.price}</p>
                    </div>

                </a>
            </ProductTile>
    // </Slider>
    );
};

export default ProductSuggestionsProductTile;
