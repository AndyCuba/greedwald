import { useDispatch, useSelector } from 'react-redux';
import { ACTION_SHOW_BACKGROUND, ACTION_HIDE_BACKGROUND } from '../../redux/ducks/animations';


import { languageSelector } from '../../redux/ducks/language';
import { ACTION_ON_MUSIC } from '../../redux/ducks/music';
import { ACTION_CHANGE_START_BUTTON, startButtonTextSelector } from '../../redux/ducks/startButton';
import { 
    ButtonContainer, 
    StyledLink, 
    Button, 
    Dragon, 
    Span
} from './style';

function StartButton() {
        
    const dispatch = useDispatch();

    const startButtonText = useSelector(startButtonTextSelector);
    const hideBackground = useSelector(state => state.animations.hideBackground);
    const english = useSelector(languageSelector);

    const handleClick = () => {
        dispatch(ACTION_ON_MUSIC);
        dispatch(ACTION_CHANGE_START_BUTTON);
        dispatch(ACTION_SHOW_BACKGROUND);
    };

    const handleMouseEnter = () => {
        dispatch(ACTION_HIDE_BACKGROUND);
    };

    return (
        
        <ButtonContainer >
            <StyledLink onClick={handleClick} to='/page'>
                <Button >
                    <Span onMouseEnter={handleMouseEnter}>{english ? startButtonText.en : startButtonText.ru}</Span>
                </Button>
                <Dragon showDragon={hideBackground}></Dragon>
            </StyledLink>
        </ButtonContainer>    
    );
};
  
export default StartButton;