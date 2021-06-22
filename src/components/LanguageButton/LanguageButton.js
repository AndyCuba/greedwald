import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ACTION_CHANGE_LANGUAGE, languageSelector } from '../../redux/ducks/language';

const StyledDiv = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 1.1rem;
    right: 1rem;
    text-align: center;
    cursor: pointer;
    z-index: 10;
`;



function LanguageButton() {
    const dispatch = useDispatch();
    const english = useSelector(languageSelector);
    const title = english ? 'Сменить язык' : 'Change language';

    const handleClick = () => {
        dispatch(ACTION_CHANGE_LANGUAGE);
    }

    return(
        <StyledDiv onClick={handleClick} title={title}>
            {english ? 'EN' : 'RU'}
        </StyledDiv>
    )
};

export default LanguageButton;