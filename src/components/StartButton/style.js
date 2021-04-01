import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dragonHead from '../../images/dragonHead.jpg';
import scrollHeader from '../../images/scrollHeader.jpg';

export const StyledLink = styled(Link)`
    border-radius: 3px;
`;

export const ButtonContainer = styled.div`
    margin: auto;
    top: 40vh;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 200px;
    position: absolute;
`;


export const Button = styled.div`
    width: 100%;
    height: 100px;
    background: url(${scrollHeader}) no-repeat top/cover;
    box-shadow: 5px 5px 10px 0px rgba(34, 60, 80, 0.7);
    border-radius: 70px;
    z-index: 3;
    padding: 5px;
    transition: all 1s ease-in-out;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-flow: nowrap row;
    align-items: center; 
    ${StyledLink}:hover &{
        box-shadow: 0px 0px 36px #c08ca0;
        transition: all 1s ease-in-out;
    }
    ${StyledLink}:active &{
        box-shadow: 5px 5px 10px 0px rgba(34, 60, 80, 0.5) inset;
    }
`;

export const Span = styled.span`
    text-align: center;
    font-family: 'Kurale', serif;
    font-size: 35px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;  

export const Dragon = styled.div`
    width: ${props => props.showDragon ? '300px' : '250px'};
    height: ${props => props.showDragon ? '270px' : '30px'};
    left: ${props => props.showDragon ? '0px' : '25px'};
    bottom: ${props => props.showDragon ? '196px' : '110px'};
    background: url(${dragonHead}) no-repeat center/cover ; 
    z-index: 2;
    border-radius: 20px;
    transition: all 1.5s ease-in-out;
    position: absolute;
`;