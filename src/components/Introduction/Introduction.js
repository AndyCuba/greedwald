import { useDispatch, useSelector } from 'react-redux';

import Info from '../Info/Info';
import StartButton from '../StartButton/StartButton';
import Modal from '../CreditsModal/CreditsModal';
import { ACTION_TOGGLE_MODAL } from '../../ducks/creditsModal';
import { languageSelector } from '../../ducks/language';
import { ACTION_SHOW_BACKGROUND } from '../../ducks/animations';
import { 
  IntroWrapper, 
  Heading, 
  CreditsButton 
} from './style';

function Introduction() {
  const dispatch = useDispatch();
  const english = useSelector(languageSelector);
  const toggleModal = () => {
    dispatch(ACTION_TOGGLE_MODAL);
  };

  const handleClick = () => {
    dispatch(ACTION_SHOW_BACKGROUND)
  };

  return (
    <IntroWrapper onClick={handleClick}>
      <Heading>{english ? 'Travel to Greedwald' : 'Путешествие в Гридвальд'}</Heading>

      <StartButton />

      <Modal />
      <CreditsButton onClick={toggleModal} >
          {english ? 'Credits' : 'Авторы'}
      </CreditsButton>
      <Info />
    </IntroWrapper>
  );
}

export default Introduction;
