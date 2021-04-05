import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import mainBackground from '../../images/mainBackground.jpg';
import blackBackground from '../../images/blackBackground.jpg';
import { infoSelector } from '../../ducks/info';
import { useEffect } from 'react';
import { ACTION_LOAD_INTRODUCTION } from '../../ducks/fetching';

const Style = createGlobalStyle`
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Kurale', serif;
            font-size: 1.2rem;
        }
        body {
            background: ${props => 
                props.hideBackground ? 
                    `url(${blackBackground}) no-repeat top/cover` :
                    `url(${props.background ? props.background : mainBackground}) no-repeat top/cover`};
            transition: ${props => 
                props.hideBackground || props.background ? 'all 2s ease-in-out' :
                    'none'};
            overflow-x:hidden;
            min-height: 100vh;
        }
    `;

function GlobalStyle() {
    const dispatch = useDispatch();
    const background = useSelector(state => state.book.background);
    const hideBackground = useSelector(state => state.animations.hideBackground);
    const isInfoOpened = useSelector(infoSelector);

    useEffect(() => {
        const background = new Image();

        background.onload = () => {
            dispatch(ACTION_LOAD_INTRODUCTION);
        };

        background.src = mainBackground;
        
    }, [dispatch]);

    return(
        <Style background={background} hideBackground={hideBackground} isInfoOpened={isInfoOpened}></Style>
    );
};

export default GlobalStyle;