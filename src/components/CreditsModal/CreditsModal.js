import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TOGGLE_MODAL } from '../../ducks/creditsModal';
import { StyledModal } from './styles';
import { languageSelector } from '../../ducks/language';


function CreditsModal() {

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);
  const english = useSelector(languageSelector);
  const toggleModal = () => {
    dispatch(ACTION_TOGGLE_MODAL);
  };

  return(
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <span>{english ? 
          `Hi! It's me, Andy Daytona, developer of this game!` : 
            `Привет! Это я, Andy Daytona, разработчик этой игры!`}</span>
      </StyledModal>
  );
};

export default CreditsModal;