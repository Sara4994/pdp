import React from 'react';
import Button from '../../Atoms/Button/Button';
import { Whishlist } from '../../locales/en-us';
// import { IoIosBookmark } from 'react-icons/io';
import { ThemeProvider } from 'styled-components';
import { Scaffold } from "@lowes/helix-global-css";
import Icon from '@lowes/icon';
// import { WishlistButton } from './ProductInformationWhishlist.style';

const ProductInformationWhishlist = () => {
    return (

        <ThemeProvider theme={{ scaffold: Scaffold }}>
            <Button text={Whishlist} >
             <span><Icon name="heart-outline" size="iconSize1x" color="themeSenary" /></span>
            </Button>
        </ThemeProvider>
    )
}

export default ProductInformationWhishlist;