import { useDispatch, useSelector } from 'react-redux';

import { IntroWrapper, Heading, CreditsButton } from './style';
import StartButton from '../StartButton/StartButton';
import { ACTION_TOGGLE_MODAL } from '../../ducks/creditsModal';
import Modal from '../CreditsModal/CreditsModal';
import { languageSelector } from '../../ducks/language';
import { ACTION_SHOW_BACKGROUND } from '../../ducks/animations';

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
    </IntroWrapper>
  );
}

export default Introduction;
