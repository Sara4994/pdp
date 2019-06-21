import React from 'react';
import {ProductSuggestions} from './PDPProductSuggestions.style'
import ProductSuggestionsProductTile from '../../Molecules/ProductSuggestionsProductTile/ProductSuggestionsProductTile';

const PDPProductSuggestions = () => {

    return (
        <ProductSuggestions>
            <div className="col-md-12 panel">
                <ProductSuggestionsProductTile />
            </div>
        </ProductSuggestions>
        

    )
}

export default PDPProductSuggestions;