import React, { useState } from 'react';
import { BestOffers } from '../../locales/en-us';
import Accordion from '@lowes/accordion';
import { BestOfferStyles, OffersTitle} from './ProductInformationBestOffers.style';
import { ThemeProvider } from 'styled-components';
import { Scaffold } from "@lowes/helix-global-css";
import Icon from '@lowes/icon';

const ProductInformationBestOffers = (props) => {
    const [open, isOpen] = useState(false);
    const clickHandler = () => {
        isOpen(!open);
    }
    return (
        <ThemeProvider theme={{ scaffold: Scaffold }}>
                 <Accordion title={BestOffers}>
                 {props.offers.map((offer,index) => (
                        <div key={index}>
                            <OffersTitle> {offer.offersTitle} </OffersTitle>
                            <p>{offer.offersDesc}</p>
                        </div>
                    ))}

                 </Accordion>
            {/* <BestOfferStyles>
                <Button type="accordion" text={BestOffers} click={clickHandler}>
                    {open ?
                        <span><Icon name="minus-thick" size="iconSize1x" color="themeSenary" /></span>
                    :
                        <span><Icon name="plus-thick" size="iconSize1x" color="themeSenary" /></span>
                    }

                </Button>
                {open ?
                    <>
                    {props.offers.map((offer,index) => (
                        <div key={index}>
                            <p>{offer.offersTitle}</p>
                            <p>{offer.offersDesc}</p>
                        </div>
                    ))}
                    </>
                     :
                    null
                }
            </BestOfferStyles> */}
        </ThemeProvider>

    )
}

export default ProductInformationBestOffers;