import styled, { keyframes } from 'styled-components';

import inventoryScroll from '../../images/inventoryScroll.png';

// styled div bg - background: rgba(255, 234, 199, 1);

const StyledDiv = styled.div`
  transition: all 1s ease-in-out;
  padding: 55px 95px 30px;
  left: -40px;
  top: 20%;
  height: 367px;
  width: 450px;
  position: fixed;
  background: url(${inventoryScroll}) no-repeat top/cover;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden' };
  animation: 1s ${props => props.isOpen ? translateIn : translateOut } linear;
  h2 {
    text-align: center;
  }
`;

const StyledItem = styled.div`
  border-radius: inherit;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  width: 100%;
  min-height: 20%;
  padding: 3px;
  display: grid;
  grid-template-columns: minmax(30px, 0.25fr) minmax(30px, 0.75fr);
  cursor: pointer;
  align-items: center;
  margin-bottom: 2px;
`;

const ArtifactImage = styled.div`
  background: url(${props => props.background}) no-repeat center/contain;
  width: 2.5rem;
  height: 2.5rem;
  ${StyledItem}:hover &{
    transform: scale(1.05);
  }
`;

export const translateIn = keyframes`
from {
  opacity: 0.9;
  transform: translate( -100%, 0);
}

to {
  opacity: 1;
  transform: translate(-3%, 0);
}
`;

export const translateOut = keyframes`
from {
  opacity: 1;
  transform: translate( 0, 0);
}

to {
  opacity: 0.9;
  transform: translate(-100%, 0);
}
`;

export { StyledDiv, StyledItem, ArtifactImage };