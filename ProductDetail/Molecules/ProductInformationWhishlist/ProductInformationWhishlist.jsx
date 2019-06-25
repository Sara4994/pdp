import React from 'react';
import Button from '@lowes/button';
// import { IoIosBookmark } from 'react-icons/io';
import { ThemeProvider } from 'styled-components';
import { Scaffold } from '@lowes/helix-global-css';
import Icon from '@lowes/icon';
import { Whishlist } from '../../locales/en-us';
import { WishlistButton } from './ProductInformationWhishlist.style';

const ProductInformationWhishlist = () => (
        <ThemeProvider theme={{ scaffold: Scaffold }}>
            <Button secondary> {Whishlist}
                <WishlistButton><Icon name="heart-outline" size="iconSize1x" color="themeSenary" /></WishlistButton>
            </Button>
        </ThemeProvider>
);

export default ProductInformationWhishlist;
