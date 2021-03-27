const TOGGLE_TRANSITION = 'TOGGLE_TRANSITION';
const HIDE_BACKGROUND = 'HIDE_BACKGROUND';
const SHOW_BACKGROUND = 'SHOW_BACKGROUND';

export const animateTransition = state => state.animations.animateTransition;

export const ACTION_TOGGLE_TRANSITION = {
    type: TOGGLE_TRANSITION
};

export const ACTION_HIDE_BACKGROUND = {
    type: HIDE_BACKGROUND
};

export const ACTION_SHOW_BACKGROUND = {
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