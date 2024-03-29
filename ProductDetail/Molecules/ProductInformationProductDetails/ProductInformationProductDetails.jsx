import React, { useState } from 'react';
import Accordion from '@lowes/accordion';
import { ThemeProvider } from 'styled-components';
import { Scaffold } from '@lowes/helix-global-css';
import Icon from '@lowes/icon';
import { ProductDetailStyle, DetailsTitle } from './ProductInformationProductDetails.style';
import { ProductDetails } from '../../locales/en-us';

const ProductInformationProductDetails = (props) => {
    const [open, isOpen] = useState(false);
    const clickHandler = () => {
        isOpen(!open);
    };
    return (
        <ThemeProvider theme={{ scaffold: Scaffold }}>
            <>
                <Accordion title={ ProductDetails }>

                    {props.details.map((detail, index) => (
                        <div key={ index }>
                            <p>{detail.details}</p>
                            <DetailsTitle>{detail.materialText}</DetailsTitle>
                            <p>{detail.materialDetails}</p>
                        </div>
                    ))}
                </Accordion>

            </>
            {/* <ProductDetailStyle>
                <Button type="accordion" text={ProductDetails} click={clickHandler}>
                    {open ?
                        <span><Icon name="minus-thick" size="iconSize1x" color="themeSenary" /></span>
                        :
                        <span><Icon name="plus-thick" size="iconSize1x" color="themeSenary" /></span>
                    }

                </Button>
                {open ?
                    <>
                        {props.details.map((detail,index) => (
                            <div key={index}>
                                <p>{detail.details}</p>
                                <p>{detail.materialText}</p>
                                <p>{detail.materialDetails}</p>
                            </div>
                        ))}
                    </>
                    :
                    null
                }
            </ProductDetailStyle> */}
        </ThemeProvider>
    );
};

export default ProductInformationProductDetails;
