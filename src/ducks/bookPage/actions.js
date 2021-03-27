import { bookText } from '../../bookTexts/bookText';
import { cityQuests } from '../../bookTexts/cityQuests';
import { woodsQuests } from '../../bookTexts/woodsQuests';

const PICK_HERO = 'PICK_HERO',
        TURN_BOOKPAGE = 'TURN_BOOKPAGE',
        SHOW_FIRST_RESULT = 'SHOW_FIRST_RESULT',
        SHOW_SECOND_RESULT = 'SHOW_SECOND_RESULT',
        START_NEW_QUEST = 'START_NEW_QUEST',
        RESET_BOOK_STATE = 'RESET_BOOK_STATE',
        SHOW_DEATH_RESULT = 'SHOW_DEATH_RESULT',
        SHOW_TRADE_RESULT = 'SHOW_TRADE_RESULT',
        SHOW_FAIL_TRADE_RESULT = 'SHOW_FAIL_TRADE_RESULT',
        SHOW_RACE_RESULT = 'SHOW_RACE_RESULT';

const ACTION_SHOW_FIRST_RESULT = (heroName) => {
    let additionalGold = 0;
    let additionalXP = 0;

    if(heroName === 'dwarf') {
        additionalGold = 50;
    } else if(heroName === 'human') {
        additionalGold = 20;
        additionalXP = 20;
    } else if (heroName === 'elf') {
        additionalXP = 50;
    }

    return {
        type: SHOW_FIRST_RESULT,
        additionalGold,
        additionalXP
    };
};

const ACTION_SHOW_SECOND_RESULT = (heroName) => {
    let additionalGold = 0;
    let additionalXP = 0;

    if(heroName === 'dwarf') {
        additionalGold = 50;
    } else if(heroName === 'human') {
        additionalGold = 20;
        additionalXP = 20;
    } else if (heroName === 'elf') {
        additionalXP = 50;
    }

    return {
        type: SHOW_SECOND_RESULT,
        additionalGold,
        additionalXP
    };
};

const ACTION_SHOW_TRADE_RESULT = (goldDifference) => {
    if(goldDifference >= 0) {
        return { 
            type: SHOW_TRADE_RESULT,
            leftGold: goldDifference
        };  
    } else {
        return {
            type: SHOW_FAIL_TRADE_RESULT
        };
    };
};

const ACTION_SHOW_RACE_RESULT = (heroName) => {
    let additionalGold = 0;
    let additionalXP = 0;

    if(heroName === 'dwarf') {
        additionalGold = 50;
    } else if(heroName === 'human') {
        additionalGold = 20;
        additionalXP = 20;
    } else if (heroName === 'elf') {
        additionalXP = 50;
    }
    return {
        type: SHOW_RACE_RESULT,
        additionalGold,
        additionalXP
    };
};

const ACTION_TURN_BOOKPAGE = (buttonName, currentHero, goldDifference) => {

    const selectedQuests = [];

    const getRandomQuest = (arr) => {
        const random = Math.floor(Math.random() * arr.length);
        return arr[random];
    };

    switch (buttonName) {
        case 'continue':
            selectedQuests.unshift(bookText[0]);
            break;
        case 'city':
            selectedQuests.unshift(getRandomQuest(cityQuests));
            break;
        case 'woods':
            selectedQuests.unshift(getRandomQuest(woodsQuests));
            break;
        case 'first_choice':
            return ACTION_SHOW_FIRST_RESULT(currentHero);
            //safe button name cant cause death
        case 'first_choice_safe':
            return ACTION_SHOW_FIRST_RESULT(currentHero);
        case 'second_choice':
            return ACTION_SHOW_SECOND_RESULT(currentHero);
        case 'second_choice_safe':
            return ACTION_SHOW_SECOND_RESULT(currentHero);
        case 'trade':
            return ACTION_SHOW_TRADE_RESULT(goldDifference);
        case 'race_choice':
            return ACTION_SHOW_RACE_RESULT(currentHero);
        case 'death':
            return { type: SHOW_DEATH_RESULT };
        default:
            return;
    };

    const [currentQuest] = selectedQuests;

    if(currentQuest.results) {
        return {
            type: START_NEW_QUEST,
            text: {
                ...currentQuest.text,
                raceButtonText: currentQuest.text.raceButtonText?.filter(
                    item => item[currentHero]
                ).map(
                    item => item[currentHero]
                )
            },
            results: {
                ...currentQuest.results,
                raceResult: currentQuest.results.raceResult?.filter(
                    item => item[currentHero]
                ).map(
                    item => item[currentHero]
                )
            },
            names: currentQuest.names,
            currentDifficulty: currentQuest.difficulty,
            background: currentQuest.background,
            image: currentQuest.image,
            itemCost: currentQuest.itemCost
        };
    } else {
        return {
            type: TURN_BOOKPAGE,
            text: currentQuest.text,
            names: currentQuest.names,
        };
    };  
};

const ACTION_RESET_BOOK_STATE = {
    type: RESET_BOOK_STATE
};

const ACTION_PICK_HERO = (heroName) => ({
    type: PICK_HERO,
    heroName: heroName
});

export {
    PICK_HERO,
    TURN_BOOKPAGE,
    SHOW_FIRST_RESULT,
    SHOW_SECOND_RESULT,
    SHOW_RACE_RESULT,
    SHOW_TRADE_RESULT,
    SHOW_FAIL_TRADE_RESULT,
    START_NEW_QUEST,
    RESET_BOOK_STATE,
    SHOW_DEATH_RESULT,
    ACTION_TURN_BOOKPAGE,
    ACTION_PICK_HERO,
    ACTION_SHOW_TRADE_RESULT,
    ACTION_SHOW_RACE_RESULT,
    ACTION_RESET_BOOK_STATE
};