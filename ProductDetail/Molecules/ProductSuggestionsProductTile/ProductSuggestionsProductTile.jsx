import React, { useContext } from 'react';
import { ProductTile } from './ProductSuggestionsProductTile.style';
import { ProductContext } from '../../Templates/ProductDescriptionPage/ProductDescriptionPage';
import { Currency } from '../../locales/en-us';


const ProductSuggestionsProductTile = (props) => {
    const product = useContext(ProductContext);
    // console.log('context',product)

    return (
       
            <ProductTile>
                <a href="#" className="item-container">
                    <div className="image-container">
                        <img src={product.image} width="200px" hegith="200px" />
                    </div>
                    <div >
                        <p>{product.name}</p>
                        <p>{Currency} {product.price}</p>
                    </div>

                </a>
            </ProductTile>
    )
}

export default ProductSuggestionsProductTile;