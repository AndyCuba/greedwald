const LOAD_INTRODUCTION = 'LOAD_INTRODUCTION';

const loadIntroductionSelector = state => state.fetching.introduction;

const ACTION_LOAD_INTRODUCTION = {
    type: LOAD_INTRODUCTION
};

const fetchingInitialState = {
    introduction: true
};

const fetchingReducer = (state = fetchingInitialState, action) => {
    switch (action.type) {
        case LOAD_INTRODUCTION:
            return { ...state, introduction: false };
        default:
            return { ...state };
    };
};

export { ACTION_LOAD_INTRODUCTION, fetchingReducer, loadIntroductionSelector };