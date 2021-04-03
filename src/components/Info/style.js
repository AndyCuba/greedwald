import styled, { keyframes } from 'styled-components';

import infoIcon from '../../images/infoIcon.svg';
import infoBackground from '../../images/infoBackground.png';


export const translateIn = keyframes`
from {
  opacity: 0.9;
  transform: translate(-100%, 0);
}

to {
  opacity: 1;
  transform: translate(0, 0);
}
`;

export const translateOut = keyframes`
from {
  opacity: 1;
  transform: translate(0, 0);
}

to {
  opacity: 0.9;
  transform: translate(+150%, 0);
}
`;

const InfoPage = styled.div`
  padding: 9% 5% 10%;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  height: 90%;
  width: 50%;
  background: url(${infoBackground}) no-repeat center/cover;
  position: absolute;
  top: 3%;
  left: 25%;
  transition: 1s all ease-in-out;
  animation: 1s ${props => props.isOpen ? translateIn : translateOut } ease-in-out;
  z-index: 200;
  text-indent: 20px;
  text-align: center;
`;

const InfoIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: url(${infoIcon}) no-repeat center/cover;
  position: absolute;
  bottom: 1.7rem;
  left: 1rem;
  cursor: pointer;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.3);
  &:active {
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
      transform: scale(0.95);
  }
`;

export { InfoPage, InfoIcon };