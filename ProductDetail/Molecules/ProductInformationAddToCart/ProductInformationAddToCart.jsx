import React from 'react';
import Button from '../../Atoms/Button/Button';
import { AddToCart } from '../../locales/en-us'
import { ThemeProvider } from 'styled-components';
import { Scaffold } from "@lowes/helix-global-css";
import Icon from '@lowes/icon';

const ProductInformationAddToCart = () => {

    return (
        <ThemeProvider theme = {{ scaffold: Scaffold }}>
            <Button text={AddToCart} type="primary" >
                <span><Icon name="cart-add" size="iconSize2x" color="lowesWhite" /></span>
            </Button>        
      </ThemeProvider>        
    ) 
}

export default ProductInformationAddToCart;