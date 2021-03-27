import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TOGGLE_MODAL } from '../../ducks/creditsModal';
import { StyledModal } from './styles';


function CreditsModal() {

    const isOpen = useSelector(state => state.modal.isOpen);

    const dispatch = useDispatch();

    const toggleModal = () => {
      dispatch(ACTION_TOGGLE_MODAL);
    };

    return(
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}>
          <span>Hi! It's me, developer of this spa</span>
        </StyledModal>
    );
};

export default CreditsModal;