import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ACTION_TOGGLE_TRANSITION } from '../../redux/ducks/animations';
import { ACTION_RESET_BOOK_STATE } from '../../redux/ducks/bookPage/actions';
import { goldSelector, xpSelector } from '../../redux/ducks/bookPage/selectors';
import { languageSelector } from '../../redux/ducks/language';
import { ACTION_RESET_START_BUTTON } from '../../redux/ducks/startButton';
import { StyledDiv } from './style';


function Death(props) {
    const dispatch = useDispatch();
    const xp = useSelector(xpSelector);
    const gold = useSelector(goldSelector);
    const english = useSelector(languageSelector);
    
    const handleClick = () => {
        dispatch(ACTION_RESET_BOOK_STATE);
        dispatch(ACTION_RESET_START_BUTTON);
        dispatch(ACTION_TOGGLE_TRANSITION);
    };

    return(
        <StyledDiv>
            <div>
                <h1>{english ? 'You are dead!' : 'Вы погибли!'}</h1>
                {props.deathText && <p>{english ? props.deathText.en : props.deathText.ru}</p>}       
                {english ? 
                (<p>You've earned {gold} gold, Your level is {Math.floor(xp / 100)}.</p>) : (
                    <p>Вы заработали {gold} золота, У вас {Math.floor(xp / 100)} уровень.</p>
                )}
                
            </div>
            <Link onClick={handleClick} to='/'>{english ? 'Start new game' : 'Начать новую игру'}</Link>
        </StyledDiv>
        
    );
};

export default Death;