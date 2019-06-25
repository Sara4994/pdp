import React from 'react';
import Slider from 'react-slick';
import { ProductSuggestions } from './PDPProductSuggestions.style';
import ProductSuggestionsProductTile from '../../Molecules/ProductSuggestionsProductTile/ProductSuggestionsProductTile';
// import '../../../../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css';


const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
};
const PDPProductSuggestions = () => (

    <Slider { ...settings }>
        <ProductSuggestions>
            <div className="col-md-12 panel">
                {/* <Button className="left-arrow"> {'<'} </Button> */}

                    <ProductSuggestionsProductTile />

                {/* <Button className="right-arrow"> {'>'} </Button> */}

            </div>
        </ProductSuggestions>
    </Slider>
);

export default PDPProductSuggestions;
