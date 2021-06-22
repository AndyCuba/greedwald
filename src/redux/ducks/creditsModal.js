const TOGGLE_MODAL = 'TOGGLE_MODAL';


export const ACTION_TOGGLE_MODAL = {
    type: TOGGLE_MODAL
};

const initialModalState = {
    isOpen: false
};

export const modalReducer = (state = initialModalState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return { ...state, isOpen: !state.isOpen };
        default:
            return { ...state };
    }
};