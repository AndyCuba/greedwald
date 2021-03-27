const ON_MUSIC = 'ON_MUSIC';
const TOGGLE_MUTE_MUSIC = 'TOGGLE_MUTE_MUSIC';


export const ACTION_ON_MUSIC = {
    type: ON_MUSIC,
};

export const ACTION_TOGGLE_MUTE_MUSIC = {
    type: TOGGLE_MUTE_MUSIC,
};


const initialMusicState = {
    isPlaying: false,
    isMuted: false
};


export const musicReducer = (state = initialMusicState, action ) => {
    switch (action.type) {
        case ON_MUSIC:
            return { ...state, isPlaying: true };
        case TOGGLE_MUTE_MUSIC:
            return { ...state, isMuted: !state.isMuted };
        default:
            return { ...state };
    };
};