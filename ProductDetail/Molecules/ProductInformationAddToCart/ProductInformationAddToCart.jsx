import React from 'react';
import Button from '@lowes/button';
import { AddToCart } from '../../locales/en-us'
import { ThemeProvider } from 'styled-components';
import { Scaffold } from "@lowes/helix-global-css";
import Icon from '@lowes/icon';

const ProductInformationAddToCart = () => {

    return (
        <ThemeProvider theme={{ scaffold: Scaffold }}>
            <Button primary > {AddToCart}
                <span><Icon name="cart-add" size="iconSize1x" color="lowesWhite" /></span>
            </Button>
        </ThemeProvider>
    )
}

export default ProductInformationAddToCart;