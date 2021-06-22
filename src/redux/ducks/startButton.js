const CHANGE_START_BUTTON = 'CHANGE_START_BUTTON';
const RESET_START_BUTTON = 'RESET_START_BUTTON';

export const startButtonTextSelector = state => state.startButton.startButtonText;

const initialStartButtonState = {
    startButtonText: {
        en: 'Start Game',
        ru: 'Начать Игру'
    }
};

export const ACTION_CHANGE_START_BUTTON = {
    type: CHANGE_START_BUTTON
};

export const ACTION_RESET_START_BUTTON = {
    type: RESET_START_BUTTON
};

export const startButtonReducer = (state = initialStartButtonState, action) => {
    switch (action.type) {
        case CHANGE_START_BUTTON:
            return { 
                ...state, 
                startButtonText: {
                    en: 'Resume Game',
                    ru: 'Продолжить игру'
                }
            };
        case RESET_START_BUTTON:
            return initialStartButtonState;
        default:
            return { ...state };
    };

};