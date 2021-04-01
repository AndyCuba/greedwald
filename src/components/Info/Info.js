import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TOGGLE_INFO, infoSelector } from '../../ducks/info';
import { languageSelector } from '../../ducks/language';
import { InfoIcon, InfoPage } from './style';


function Info() {
    const dispatch = useDispatch();
    const isOpen = useSelector(infoSelector);
    const english = useSelector(languageSelector);

    const handleClick = () => {
        dispatch(ACTION_TOGGLE_INFO);
    };

    return(
        <div>
            <InfoPage isOpen={isOpen}>{english ? 
            'Greedwald is a text-based Rpg game in which the main goal is to destroy dangerous dragon "Taersur, The Scary". In order to do this, you need to collect artifacts that will help you in completing quests or increase your level. In some quests you can die, so be careful. It\'s better to start the game with exploring the city. Good luck!' 
             : 'Гридвальд это текстовая Рпг игра, в которой главная цель уничтожить опасного дракона Таэрсура Ужасного. Для того, чтобы это сделать, вам необходимо собрать артефакты, которые вам помогут в выполнении квестов или повысить свой уровень. В некоторых квестах можно умереть, поэтому будьте осторожны. Лучше всего начинать игру с исследования города. Удачи!'}</InfoPage>
            <InfoIcon onClick={handleClick}></InfoIcon>
        </div>
    )
};

export default Info;