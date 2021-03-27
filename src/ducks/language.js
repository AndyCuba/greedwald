const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const languageSelector = state => state.language.english;

export const ACTION_CHANGE_LANGUAGE = {
    type: CHANGE_LANGUAGE
};

const initialLanguageState = {
    english: true
};

export const languageReducer = (state = initialLanguageState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                english: !state.english
            }
        default:
            return { ...state };
    }
};
