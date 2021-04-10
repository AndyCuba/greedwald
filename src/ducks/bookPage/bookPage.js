import { 
    RESET_BOOK_STATE,
    SHOW_FIRST_RESULT, 
    SHOW_SECOND_RESULT,
    SHOW_PREV_FIRST_RESULT,
    SHOW_PREV_SECOND_RESULT,
    SHOW_RACE_RESULT,
    SHOW_TRADE_RESULT,
    SHOW_FAIL_TRADE_RESULT,
    SHOW_DEATH_RESULT,
    START_NEW_QUEST, 
    TURN_BOOKPAGE, 
    PICK_HERO
} from './actions';

import initialBookState from './initialBookState'

export const bookReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case TURN_BOOKPAGE:
            return { 
                ...state,
                text: action.text,
                names: action.names,
                image: '',
                background: ''
            };
        case START_NEW_QUEST:
            return { 
                ...state,
                text: action.text,
                names: action.names,
                results: {
                    ...state.results,
                    firstResult: { 
                        ...state.results.firstResult,
                        ...action.results.firstResult
                    },
                    secondResult: { 
                        ...state.results.secondResult,
                        ...action.results.secondResult
                    },
                    prevResults: {
                        ...action.results.prevResults
                    },
                    nextResults: {
                        ...action.results.nextResults
                    },
                    failResult: {
                        //It makes button name "Continue" after quest
                        ...state.results.secondResult,
                        ...action.results.failResult
                    },
                    raceResult: {                      
                        ...action.results.raceResult
                    },
                    deathResult: { 
                        ...action.results.deathResult 
                    },
                    
                },
                currentDifficulty: action.currentDifficulty,
                background: action.background,
                image: action.image,
                itemCost: action.itemCost
            };
        case SHOW_FIRST_RESULT:
            if(state.results.firstResult.hero.artifact) {
                return {
                    ...state,
                    text: { 
                        ...state.results.firstResult.text, 
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        }
                    },
                    names: state.results.firstResult.names,
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.firstResult.hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.firstResult.hero.gold + action.additionalGold,
                        artifacts: [ ...state.hero.artifacts, state.results.firstResult.hero.artifact ]
                    },
                    currentDifficulty: '',
                    image: ''
                };
            } else {
                return {
                    ...state,
                    text: { 
                        ...state.results.firstResult.text, 
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        }
                    },
                    names: state.results.firstResult.names,
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.firstResult.hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.firstResult.hero.gold + action.additionalGold
                    },
                    currentDifficulty: '',
                    image: ''
                };
            }
        case SHOW_SECOND_RESULT:
            if(state.results.secondResult.hero.artifact) {
                return {
                    ...state,
                    text: { 
                        ...state.results.secondResult.text,
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        } 
                    },
                    names: state.results.secondResult.names,
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.secondResult.hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.secondResult.hero.gold + action.additionalGold,
                        artifacts: [ ...state.hero.artifacts, state.results.secondResult.hero.artifact ]
                    },
                    currentDifficulty: '',
                    image: ''
                };
            } else {
                return {
                    ...state,
                    text: { 
                        ...state.results.secondResult.text,
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        } 
                    },
                    names: state.results.secondResult.names,
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.secondResult.hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.secondResult.hero.gold + action.additionalGold
                    },
                    currentDifficulty: '',
                    image: ''
                };
            };
        case SHOW_PREV_FIRST_RESULT: 
            return {
                ...state,
                text: { 
                    ...state.results.prevResults.firstResult.text,
                    ...state.text.nextButtons.prevFirstChoice
                },
                results: {
                    ...state.results,
                    firstResult: {
                        ...state.results.firstResult,
                        ...state.results.nextResults.first.firstResult
                    },
                    secondResult: {
                        ...state.results.secondResult,
                        ...state.results.nextResults.first.secondResult
                    },
                },
                names: { ...state.names.nextNames.first },
            };
        case SHOW_PREV_SECOND_RESULT: 
            return {
                ...state,
                text: { 
                    ...state.results.prevResults.secondResult.text,
                    ...state.text.nextButtons.prevSecondChoice
                },
                results: {
                    ...state.results,
                    firstResult: {
                        ...state.results.firstResult, //for correct "continue" button names
                        ...state.results.nextResults.second.firstResult
                    },
                    secondResult: {
                        ...state.results.secondResult,
                        ...state.results.nextResults.second.secondResult
                    },
                },
                names: { ...state.names.nextNames.second },
            };
        case SHOW_DEATH_RESULT:
            return {
            ...state,
            text: { ...state.results.deathResult.text } 
            };
        case SHOW_TRADE_RESULT:
            return {
                ...state,
                text: { 
                    ...state.results.firstResult.text,
                    firstButtonText: {
                        en: 'Continue',
                        ru: 'Продолжить'
                    } 
                },
                names: state.results.firstResult.names,
                hero: {
                    ...state.hero,
                    xp: state.hero.xp + state.results.firstResult.hero.xp,
                    gold: action.leftGold,
                    artifacts: [ ...state.hero.artifacts, state.results.firstResult.hero.artifact ]
                },
                currentDifficulty: '',
                itemCost: 0
            };
            case SHOW_FAIL_TRADE_RESULT:
                return {
                    ...state,
                    text: { 
                        ...state.results.failResult.text,
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        } 
                    },
                    names: state.results.failResult.names,
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.failResult.hero.xp,
                        gold: state.hero.gold + state.results.failResult.hero.gold
                    },
                    currentDifficulty: '',
                    itemCost: 0
                };
        case SHOW_RACE_RESULT:
            if(state.results.raceResult[0].hero.artifact) {
                return {
                    ...state,
                    text: { 
                        ...state.results.raceResult[0].text,
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        } 
                    },
                    names: { firstButtonName: 'continue' },
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.raceResult[0].hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.raceResult[0].hero.gold + action.additionalGold,
                        artifacts: [ ...state.hero.artifacts, state.results.raceResult[0].hero.artifact ]
                    },
                    currentDifficulty: '',
                    image: '',
                    itemCost: 0
                };
            } else {
                return {
                    ...state,
                    text: { 
                        ...state.results.raceResult[0].text,
                        firstButtonText: {
                            en: 'Continue',
                            ru: 'Продолжить'
                        } 
                    },
                    names: { firstButtonName: 'continue' },
                    hero: {
                        ...state.hero,
                        xp: state.hero.xp + state.results.raceResult[0].hero.xp + action.additionalXP,
                        gold: state.hero.gold + state.results.raceResult[0].hero.gold + action.additionalGold
                    },
                    currentDifficulty: '',
                    image: '',
                    itemCost: 0
                };
            };  
        case PICK_HERO:
            return {
                ...state,
                hero: {
                    ...state.hero,
                    heroName: action.heroName
                }
            };
        case RESET_BOOK_STATE:
            return initialBookState;
        default:
            return { ...state };
    };
};