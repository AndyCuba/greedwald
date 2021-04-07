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
        {english ? (<div>Hi! It's me, Andy Daytona, developer of this game! 
          <ul>
            Here is my contacts:
            <li><a href='https://by.linkedin.com/in/andydaytona'>LinkedIn</a></li>
          </ul>
          </div>) : (<div>Привет, это Andy Daytona, разработчик этой игры! 
          <ul>
            Вот мои контакты:
            <li><a href='https://by.linkedin.com/in/andydaytona'>LinkedIn</a></li>
          </ul>
          </div>)}
      </StyledModal>
  );
};

export default CreditsModal;