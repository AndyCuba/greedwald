
const initialBookstate = {
    text:{
        mainPageText: {
           en: 'During your travels, you have become famous as a successful and honest mercenary, but because of your nature, you are stranded. However, everything turned out to be not so bad, king Othemod IV, having heard about your achievments, offered you to deal with the dragon Taerusur the Scary, who has been terrorizing the local population for almost a year. Since the king promises you untold riches, you immediately head to the city of Greedwald, near which the dragon was last seen...',
           ru: 'За время своих путешествий Вы прославились как удачливый и честный наемник, но из-за вашего характера вы оказались на мели. Однако все оказалось не так плохо, король Отемод IV, услышав о ваших подвигах предложил вам расправится с драконом Таэрусуром Ужасным, который терроризирует местное население уже почти год. Так как король обещает вам несметные богатства, вы немедленно направляетесь в город Гридвальд, возле которого дракона видели в последний раз...'
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