import { useSelector } from 'react-redux';

import { goldSelector, heroNameSelector, xpSelector } from '../../ducks/bookPage/selectors';
import { languageSelector } from '../../ducks/language';
import { StyledHeader, HumanPortrait, DwarfPortrait, ElfPortrait, GoldCoins } from './style';


function Header() {
    const hero = useSelector(heroNameSelector)
    const xp = useSelector(xpSelector);
    const gold = useSelector(goldSelector);
    const lvl = Math.floor(xp / 100);
    const english = useSelector(languageSelector);

    return(
        <StyledHeader hero={hero}>
           
            <div>
                {
                    (hero === 'dwarf') ? 
                        <DwarfPortrait /> : 
                        (hero === 'human') ? 
                        <HumanPortrait /> : <ElfPortrait />
                } 
                <p>{english ? 'XP' : 'Опыт'}:&nbsp;{xp}</p>
                <p>{english ? 'Level' : 'Уровень'}:&nbsp;{lvl}</p>
                {gold >= 0 ? (<p>{gold}&nbsp;<GoldCoins title={english ? 'You definetly like it' : 'Вам определенно это нравится'}/></p>) : (<p>{english ? 'Debt' : 'Долг'}:&nbsp;{gold}</p>)}
            </div>
        </StyledHeader>
    );
}

export default Header;