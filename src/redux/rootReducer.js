import { combineReducers } from 'redux';
import { mainPageTransitionReducer } from '../ducks/animations';
import { bookReducer } from '../ducks/bookPage/bookPage';
import { modalReducer } from '../ducks/creditsModal';
import { languageReducer } from '../ducks/language';
import { musicReducer } from '../ducks/music';
import { startButtonReducer } from '../ducks/startButton';

export const rootReducer = combineReducers({  
    music: musicReducer,
    book: bookReducer,
    animations: mainPageTransitionReducer,
    modal: modalReducer,
    startButton: startButtonReducer,
    language: languageReducer
});