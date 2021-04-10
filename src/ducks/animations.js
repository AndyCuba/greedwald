const TOGGLE_TRANSITION = 'TOGGLE_TRANSITION';
const HIDE_BACKGROUND = 'HIDE_BACKGROUND';
const SHOW_BACKGROUND = 'SHOW_BACKGROUND';

const animateTransition = state => state.animations.animateTransition;
const hideBackgroundSelector = state => state.animations.hideBackground;

const ACTION_TOGGLE_TRANSITION = {
    type: TOGGLE_TRANSITION
};

const ACTION_HIDE_BACKGROUND = {
    type: HIDE_BACKGROUND
};

const ACTION_SHOW_BACKGROUND = {
    type: SHOW_BACKGROUND
};

const initialTransitionState = {
    animateTransition: false,
    hideBackground: false
};

export const mainPageTransitionReducer = (state = initialTransitionState, action ) => {
    switch (action.type) {
        case TOGGLE_TRANSITION:
            return { ...state, animateTransition: !state.animateTransition };
        case HIDE_BACKGROUND:
            return { ...state, hideBackground: true };
        case SHOW_BACKGROUND:
            return { ...state, hideBackground: false };
        default:
            return { ...state };
    };
};

export { 
    animateTransition, 
    hideBackgroundSelector, 
    ACTION_TOGGLE_TRANSITION, 
    ACTION_HIDE_BACKGROUND,
    ACTION_SHOW_BACKGROUND
};