import { useDispatch, useSelector } from 'react-redux';
import { 
    StyledWrapper,
    StyledDiv,
    DwarfCard,
    HumanCard,
    ElfCard
} from './style';

import { 
    dwarfHeading,
    dwarfDescription,
    humanHeading,
    humanDescription,
    elfHeading,
    elfDescription
} from '../../bookTexts/heroPickText';
import { languageSelector } from '../../redux/ducks/language';
import { ACTION_PICK_HERO } from '../../redux/ducks/bookPage/actions';
import { animateTransition } from '../../redux/ducks/animations';


function HeroPick() {
    const dispatch = useDispatch();
    const english = useSelector(languageSelector);
    const isAnimated = useSelector(animateTransition);

    const dwarfSkills = 
        english ? '+ 50 gold for every successful action' 
        : '+ 50 золота за каждое успешное действие';

    const humanSkills = 
        english ? '+ 20 gold and expirience for every successful action' 
        : '+ 20 золота и опыта за каждое успешное действие';

    const elfSkills = 
        english ? '+ 50 expirience for every successful action' 
        : '+ 50 опыта за каждое успешное действие';

    const handleClick = (e) => {
        dispatch(ACTION_PICK_HERO(e.currentTarget.id));
    };

    return(
        <StyledWrapper isAnimated={isAnimated}>
            <StyledDiv id="dwarf" title={dwarfSkills} onClick={handleClick}>
                <DwarfCard>
                    <div></div>
                    <h1>{english ? dwarfHeading.en : dwarfHeading.ru}</h1>
                    <p>{english ? dwarfDescription.en : dwarfDescription.ru}</p>
                </DwarfCard>
            </StyledDiv>
            <StyledDiv id="human" title={humanSkills} onClick={handleClick}>
                <HumanCard>
                    <div></div>
                    <h1>{english ? humanHeading.en : humanHeading.ru}</h1>
                    <p>{english ? humanDescription.en : humanDescription.ru}</p>
                </HumanCard>
            </StyledDiv>
            <StyledDiv id="elf" title={elfSkills} onClick={handleClick}>
                <ElfCard>
                    <div></div>
                    <h1>{english ? elfHeading.en : elfHeading.ru}</h1>
                    <p>{english ? elfDescription.en : elfDescription.ru}</p>
                </ElfCard>
            </StyledDiv>
        </StyledWrapper>
    );
};

export default HeroPick;