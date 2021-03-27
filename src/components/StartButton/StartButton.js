import { useDispatch, useSelector } from 'react-redux';
import { ACTION_SHOW_BACKGROUND, ACTION_HIDE_BACKGROUND } from '../../ducks/animations';


import { languageSelector } from '../../ducks/language';
import { ACTION_ON_MUSIC } from '../../ducks/music';
import { ACTION_CHANGE_START_BUTTON, startButtonTextSelector } from '../../ducks/startButton';
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
                <Button onMouseEnter={handleMouseEnter}>
                    <Span>{english ? startButtonText.en : startButtonText.ru}</Span>
                </Button>
                <Dragon showDragon={hideBackground}></Dragon>
            </StyledLink>
        </ButtonContainer>    
    );
  };
  
  export default StartButton;