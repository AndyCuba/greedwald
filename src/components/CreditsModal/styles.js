import { keyframes } from 'styled-components';
import Modal from 'styled-react-modal';


const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledModal = Modal.styled`
    padding: 5%;
    border-radius: 2px;
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    background-color: white;
    animation: 1s ${fade} linear;
    cursor: default;
    z-index: 40;
    ul > li {
      list-style: none;
    }
    div, ul, a {
      @media (max-width: 570px) {
        font-size: 1rem; 
      } 
    }
    
`;