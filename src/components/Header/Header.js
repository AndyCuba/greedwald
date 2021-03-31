import { useDispatch, useSelector } from 'react-redux';

import { 
    goldSelector, 
    heroNameSelector, 
    xpSelector 
} from '../../ducks/bookPage/selectors';
import { ACTION_TOGGLE_INVENTORY } from '../../ducks/inventory';
import { languageSelector } from '../../ducks/language';
import { 
    StyledHeader, 
    HumanPortrait, 
    DwarfPortrait, 
    ElfPortrait, 
    GoldCoins, 
    InventoryIcon
} from './style';


function Header() {
    const dispatch = useDispatch();
    const hero = useSelector(heroNameSelector)
    const xp = useSelector(xpSelector);
    const gold = useSelector(goldSelector);
    const lvl = Math.floor(xp / 100);
    const english = useSelector(languageSelector);

    const handleClick = () => {
        dispatch(ACTION_TOGGLE_INVENTORY);
    };

    return(
        <StyledHeader hero={hero}>
            
            <div>
                <InventoryIcon onClick={handleClick} title={english ? 'Artifacts' : 'Артефакты'}/>
                <div>
                    {
                        (hero === 'dwarf') ? 
                            <DwarfPortrait /> : 
                            (hero === 'human') ? 
                            <HumanPortrait /> : <ElfPortrait />
                    }
                </div>
                <p>{english ? 'XP' : 'Опыт'}:&nbsp;{xp}</p>
                <p>{english ? 'Level' : 'Уровень'}:&nbsp;{lvl}</p>
                {gold >= 0 ? (<p>{gold}&nbsp;<GoldCoins title={english ? 
                    'You definetly like it' : 
                        'Вам определенно это нравится'}/></p>) 
                            : (<p>{english ? 'Debt' : 'Долг'}:&nbsp;{gold}</p>)}
            </div>
        </StyledHeader>
    );
}

export default Header;