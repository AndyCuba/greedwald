import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    0%, 100% {
      transform: scale(0.0);
    }
    7%, 90% {
      transform: scale(0.4);
    }
    50% {
      transform: scale(1);
    }
`;

const MainSVG = styled.svg`
    display:block;
    width:258px;
    height:258px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
`;

const Tree = styled.path`
    fill: #00f731;
`;

const CircleMask = styled.path`
    transform-origin: 50% 90%;
    animation: ${scale} 5s infinite ease-out;
`;

const Heading = styled.h1`
    text-align: center;
    padding: 3rem;
    font-family: 'Kurale', serif;
`;

export { MainSVG, Tree, CircleMask, Heading };