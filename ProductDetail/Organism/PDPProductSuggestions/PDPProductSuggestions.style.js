import styled from 'styled-components';

export const ProductSuggestions = styled.div`
    .panel {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }
    width: 25%;

    .slick-dots {
        text-align: center;
      margin: 0 0 10px 0;
      padding: 0;
      li {
        display:inline-block;
        margin-left: 4px;
        margin-right: 4px;
        &.slick-active {
          button {
            background-color:black;
          }
        }
        button {
          font: 0/0 a;
          text-shadow: none;
          color: transparent;
          background-color:#999;
          border:none;
          width: 15px;
          height: 15px;
          border-radius:50%;
        }
            :hover{
                background-color: black;
            }
      }
    }
    
    /* Custom Arrow */
    .prev{
        color: #999;
        position: absolute;
        top: 38%;
        left: -2em;
        font-size: 1.5em;
            :hover{
                cursor: pointer;
                color: black;
            }
    }
    .next{
        color: #999;
        position: absolute;
        top: 38%;
        right: -2em;
        font-size: 1.5em;
        :hover{
                cursor: pointer;
                color: black;
            }
    }
    
`;
