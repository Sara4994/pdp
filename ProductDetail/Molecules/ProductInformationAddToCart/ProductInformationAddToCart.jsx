import React from 'react';
import Button from '@lowes/button';
import { ThemeProvider } from 'styled-components';
import { Scaffold } from '@lowes/helix-global-css';
import Icon from '@lowes/icon';
import { AddToCart } from '../../locales/en-us';
import { AddToCartButton } from './ProductInformationAddToCart.style';

const ProductInformationAddToCart = () => (
        <ThemeProvider theme={{ scaffold: Scaffold }}>
            <Button primary> {AddToCart}
                <AddToCartButton><Icon name="cart-add" size="iconSize15x" color="lowesWhite" /></AddToCartButton>
            </Button>
        </ThemeProvider>
);

export default ProductInformationAddToCart;
