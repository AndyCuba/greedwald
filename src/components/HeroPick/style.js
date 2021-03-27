import styled, { keyframes } from 'styled-components';
import { elfImage, dwarfImage, humanImage } from '../../bookTexts/heroPickText';
import raceCardsBackground from '../../images/raceCardsBackground.png';

const translate = keyframes`
from {
  opacity: 0;
  transform: translate(0, -50%);
}

to {
  opacity: 1;
  transform: translate(0, 0);
}
`;

const StyledWrapper = styled.div`
    padding: 4rem 1rem 2rem;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-gap: 2vw;
    height: 100vh;
    animation: 1s ${props => props.isAnimated ? translate : 'none'} linear;
`;

const StyledDiv = styled.div`
    height: 85vh;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    transition: all 1s;
    &:hover {
        transform: scale(1.04);
    }
    p {
        margin-left: 0.5rem;
        text-indent: 0.5rem;
    }
`;

const DwarfCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding: 0 0 1rem 0;
    background: url(${raceCardsBackground}) no-repeat bottom/160%;
    div {
        border-radius: inherit;
        margin: auto;
        width: 100%;
        height: 40%;
        background: url(${dwarfImage}) no-repeat center/cover;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
    }
`;

const HumanCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    border-radius: inherit;
    padding: 0 0 1rem 0;
    background: url(${raceCardsBackground}) no-repeat bottom/180%;
    div {
        border-radius: inherit;
        margin: auto;
        width: 100%;
        height: 40%;
        background: url(${humanImage}) no-repeat center/cover;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
    }
`;

const ElfCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
    border-radius: inherit;
    padding: 0 0 1rem 0;
    background: url(${raceCardsBackground}) no-repeat bottom/160%;
    div {
        border-radius: inherit;
        margin: auto;
        width: 100%;
        height: 40%;
        background: url(${elfImage}) no-repeat center/cover;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
    }
`;

export { StyledWrapper, StyledDiv, DwarfCard, HumanCard, ElfCard };