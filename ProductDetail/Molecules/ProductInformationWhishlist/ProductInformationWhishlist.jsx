import React from 'react';
import Button from '../../Atoms/Button/Button';
import {Whishlist} from '../../locales/en-us';
import { IoIosBookmark } from 'react-icons/io';


const ProductInformationWhishlist = () => {
    return (
        <Button text={Whishlist} >
            <span><i><IoIosBookmark /></i></span>
        </Button>
    )
}

export default ProductInformationWhishlist;