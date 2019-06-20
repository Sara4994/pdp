import styled from 'styled-components';

export const ProductPrice = styled.div`
    margin-bottom: 20px;
    .price{
        font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: #282C3F;
    margin-right: 12px;
    cursor: pointer;
    }
    .mrp{
        height: 22px;
    opacity: 0.8;
    font-size: 20px;
    line-height: 1.2;
    color: #282C3F;
    margin-right: 12px;
    text-decoration: line-through;

    }
    .discountDisplayLabel{
        font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #FF905A;
    }
    .disclaimer {
        color: #7E808C;
    font-size: 14px;
    
    margin: 5px 10px 0px 0px;
    }

`;