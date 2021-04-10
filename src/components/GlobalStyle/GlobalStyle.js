import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import mainBackground from '../../images/mainBackground.jpg';
import blackBackground from '../../images/blackBackground.jpg';
import { infoSelector } from '../../ducks/info';
import { hideBackgroundSelector } from '../../ducks/animations';

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
                    `url(${props.background ? props.background : mainBackground}) top/cover`};
            transition: ${props => 
                props.hideBackground || props.background ? 'background-image 2s ease-in-out' :
                    'none'};
            overflow-x:hidden;
            min-height: 100vh;
        }
    `;

function GlobalStyle() {
    const background = useSelector(state => state.book.background);
    const hideBackground = useSelector(hideBackgroundSelector);
    const isInfoOpened = useSelector(infoSelector);

    return(
        <Style background={background} hideBackground={hideBackground} isInfoOpened={isInfoOpened}></Style>
    );
};

export default GlobalStyle;