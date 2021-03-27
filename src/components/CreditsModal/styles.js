import { keyframes } from 'styled-components';
import Modal from 'styled-react-modal';


const slide = keyframes`
  from {
    height: 10%;
    width: 30%;
  }

  to {
    height: 40%;
    width: 50%;
  }
`;

export const StyledModal = Modal.styled`
    padding: 2rem;
    border-radius: 2px;
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    background-color: white;
    animation: 1s ${slide} linear;
    cursor: default;
    z-index: 40;
`;