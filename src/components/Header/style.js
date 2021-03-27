import styled from 'styled-components';
import { 
    dwarfImage, 
    elfImage, 
    humanImage 
} from '../../bookTexts/heroPickText';
import headerBackground from '../../images/scrollHeader.jpg';
import coins from '../../images/coins.png';

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    text-align: center;
    -webkit-box-shadow: 0px 4px 30px 0px rgba(127, 145, 159, 0.5);
    -moz-box-shadow: 0px 4px 30px 0px rgba(127, 145, 159, 0.5);
    box-shadow: 0px 4px 30px 0px rgba(127, 145, 159, 0.5);
    &:after{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url(${headerBackground}) no-repeat center/cover;
        opacity: 0.6;
    }
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 150px));
        grid-gap: 2vw;
        justify-content: center;
        justify-items: end;
        align-items: center;
    }
    p {
        padding: 1rem;
        display: flex;
        align-items: center;
    }
`;

const DwarfPortrait = styled.div`
    background: top 21% left 42% / 350% url(${dwarfImage}) no-repeat;
    border-radius: 65px;
    border: 2px solid grey;
    width: 3rem;
    height: 3rem;
    justify-self: start;
    transition: all 1s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const HumanPortrait = styled.div`
    background: left 15% / 220% url(${humanImage}) no-repeat;
    border-radius: 65px;
    border: 2px solid white;
    width: 3rem;
    height: 3rem;
    justify-self: start;
    transition: all 1s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const ElfPortrait = styled.div`
    background: top 21% left 25% / 650% url(${elfImage}) no-repeat;
    border-radius: 65px;
    border: 2px solid green;
    width: 3rem;
    height: 3rem;
    justify-self: start;
    transition: all 1s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const GoldCoins = styled.span`
    display: inline-block;
    background: top 20% left 55% / 80% url(${coins}) no-repeat;
    width: 70px;
    height: 40px;
    position: relative;
    cursor: pointer;
`;

export { 
    StyledHeader, 
    DwarfPortrait, 
    HumanPortrait, 
    ElfPortrait, 
    GoldCoins 
};