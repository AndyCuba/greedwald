const TOGGLE_INFO = 'TOGGLE_INFO';

export const infoSelector = state => state.info.isOpen;

export const ACTION_TOGGLE_INFO = {
    type: TOGGLE_INFO
};

const initialInfoState = {
    isOpen: false
};

export const infoReducer = (state = initialInfoState, action) => {
    switch (action.type) {
        case TOGGLE_INFO:
            return { ...state, isOpen: !state.isOpen };
        default:
            return { ...state };
    }
};