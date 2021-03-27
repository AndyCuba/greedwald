
const initialBookstate = {
    text:{
        mainPageText: {
           en: 'Main Redux Text',
           ru: 'Главный текст'
        },
        firstButtonText: {
            en: 'Continue',
            ru: 'Продолжить'
        },
        secondButtonText: {
            en: '',
            ru: ''
        }
    },
    names:{
        firstButtonName: 'continue',
        secondButtonName: ''
    },
    hero:{
        heroName: '',
        xp: 0,
        gold: 0,
        artifacts: []
    },
    results: {
        firstResult: {
            text:{
                mainPageText: '',
                firstButtonText: '',
                secondButtonText: ''
            },
            names:{
                firstButtonName: 'continue',
                secondButtonName: ''
            },
            hero:{
                xp: 0,
                gold: 0
            }
        },
        secondResult: {
            text:{
                mainPageText: '',
                firstButtonText: '',
                secondButtonText: ''
            },
            names:{
                firstButtonName: 'continue',
                secondButtonName: ''
            },
            hero:{
                xp: 0,
                gold: 0
            }
        },
        failResult: {
            text:{
                mainPageText: '',
                firstButtonText: '',
                secondButtonText: ''
            },
            names:{
                firstButtonName: 'continue',
                secondButtonName: ''
            },
            hero:{
                xp: 0,
                gold: 0
            }
        },
        raceResult: [{
            text:{
                mainPageText: '',
                firstButtonText: '',
                secondButtonText: ''
            },
            names:{
                firstButtonName: 'continue',
                secondButtonName: ''
            },
            hero:{
                xp: 0,
                gold: 0
            }
        }],
        deathResult: {}
    },
    currentDifficulty: '',
    background: ''
};

export default initialBookstate;