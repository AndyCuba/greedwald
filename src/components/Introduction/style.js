import styled, { keyframes } from 'styled-components';

// import { StyledLink } from '../StartButton/style'


const IntroWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  padding: 3rem;
  animation: 2s ${fadeIn} linear;
`;

const CreditsButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  position: absolute;
  bottom: 2rem;
  border: none;
  background-color: transparent;
  right: 2.5rem;
  padding: 0.25rem 1rem;
  transition: all 2s;
  &:hover {
    border-radius: 7px;
    transform: scale(1.2);
  }
  &:focus {
    outline: none;
  }
`;

export { IntroWrapper, Heading, CreditsButton };