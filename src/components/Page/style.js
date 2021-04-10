import styled, { keyframes } from 'styled-components';

import scrollHeader from '../../images/scrollHeader.jpg';
import pageBackground from '../../images/pageBackground.jpg';

const PageWrapper = styled.div`
  position: relative;
`;

const Image = styled.div`
  min-height: 50vh;
  max-height: 60vh;
  max-width: 80%;
  margin: auto;
  border-radius: 3px;
  background: ${props => props.background ? `url(${props.background}) no-repeat top/cover` : 'none'};
  transition: all 2s ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`;

const BookWrapper = styled.div`
  padding: 3rem 5% 5rem;
  animation: 1s ${props => props.isAnimated ? translate : 'none'} linear;
  font-weight: bold;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2vw;
  justify-content: center;
  align-items: start;
  max-width: 1100px;
  margin: auto;
  position: relative;
  border-radius: 10px;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url(${pageBackground}) no-repeat top/cover;
    opacity: 0.8;
    border-radius: inherit;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

const MainTextWrapper = styled.div`
  text-indent: 1rem;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-auto-rows: repeat(auto-fill, minmax(50px, 1fr));
  grid-gap: 1vw;
  justify-items: center;
  button {
    width: 90%;
    cursor: pointer;
    background: url(${scrollHeader}) no-repeat center/cover;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.3);
    outline: none;
    border: none;
    border-radius: 10px;
  }
  button:active {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
    transform: scale(0.99);
  }
`;

export const translate = keyframes`
from {
  opacity: 0;
  transform: translate( 0, 50%);
}

to {
  opacity: 0.9;
  transform: translate(0, 0);
}
`;

export { PageWrapper, Image, BookWrapper, ButtonWrapper, MainTextWrapper };