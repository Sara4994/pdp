import styled from 'styled-components';

export const ProductDescriptionPageStyle = styled.div`
    .pdp-detail {
        margin-top: 20px;
    }
`;

export const CarouselStyling = styled.span`
    .carousel-container {
        border: 1px solid #000;
        height: 370px;
        overflow: hidden;
        padding: 0 40px;
        position: relative;
        text-align: center;
    }
    button {
        width: 20px;
        position: absolute;
        height: 100%;
        background: #f1f1f1;
    }
    .left-arrow {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .right-arrow {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;