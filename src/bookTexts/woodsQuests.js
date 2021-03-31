import woods2i from '../images/woods2i.jpg';

export const woodsQuests = [
    // hobgoblin
    {
        id: 1,
        name: 'Untasty hobgoblin',
        difficulty: 5,
        text:{
            mainPageText: {
                en: 'In the dangerous woods you meet a hobgoblin. He is sleeping (or pretending to be).',
                ru: 'В опасном лесу вы встречаете хобгоблина. Он спит (или притворяется спящим).',
            },
            firstButtonText: {
                en: 'You should go away quickly. As you heard in the tavern hobgoblins are very cunning and dangerous...',
                ru: 'Вам следует срочно убираться отсюда. В таверне вы слашали что хобгоблины очень хитры и опасны...'
            },
            secondButtonText: {
                en: 'You think you can steal his gold and kill him if he\'ll wake up.',
                ru: 'Вы считаете, что сможете украсть его золото или убить его если он проснется.' 
            },
            raceButtonText: [{
                dwarf: {
                    en: 'As a dwarf you have met such hobgoblins at Graz-Bordus montains, you know how to deal with them.',
                    ru: 'Как дворф вы встречали таких хобгоблинов в горах Граз-Бордус, вы знаете как справиться с ними.'
                }
            }]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You save your life, you are successfully leaving this damned forest.',
                        ru: 'Вы cпасаете свою жизнь и успешно покидаете этот проклятый лес.'
                    },
                },
                hero:{
                    xp: 100,
                    gold: 0,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You successfully steal his gold and even his beer(that doesn\'t tastes good actually).',
                        ru: 'Вы успешно крадете его золото и даже его пиво(которое на самом деле не очень вкусное).'
                    },
                },
                hero:{
                    xp: 100,
                    gold: 100,
                }
            },
            raceResult: [{
                dwarf: {
                    text:{
                        mainPageText: {
                            en: 'As soon as he saw such strong dwarf as you he immediately ran away. You take all his loot and his beer, which reminded you of the good old times in Graz-Bordus, in those days this beer was bad as it is now...',
                            ru: 'Как только он увидел такого сильного дворфа как Вы, он сразу сбежал. Вы забираете все его золото и пиво, которое напомнило вам те добрые старые времена в Граз-Бордус, тогда это пиво было такое же плохое как и сейчас...'
                        },
                    },
                    hero:{
                        xp: 100,
                        gold: 250,
                    }
                }
            }],
            deathResult: {
                text:{
                    deathText: {
                        en: 'Those local drunks from the city tavern were right, hobgoblin killed you before you could do anything!',
                        ru: 'Те местные пъянчуги из городской таверны были правы, хобгоблин убил вас до того, как вы успели что-то сделать!'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice',
            raceButtonName: 'race_choice'
        }
    },
    // woods elfs camp
    {
        id: 2,
        name: 'Wood elfs camp',
        difficulty: 20,
        image: woods2i,
        text:{
            mainPageText: {
                en: 'In the dangerous woods you find a wood elves camp. You failed to catch them by surprise.',
                ru: 'В опасном лесу вы находите лагерь лесных эльфов. Вам не удалось застать их врасплох.',
            },
            firstButtonText: {
                en: 'As you heard elven jewelry is very expensive on the black market, and you just need money right now, so you are going to fight them.',
                ru: 'Вы слашали, что драгоценности эльфов очень дорого стоят на черном рынке, а вам сейчас как раз нужны деньги, поэтому вы собираетесь сразиться с ними.'
            },
            secondButtonText: {
                en: 'You should go away quickly. Today you don\'t want to try your luck fighting with dexterous elves.',
                ru: 'Вам следует срочно убираться отсюда. Сегодня вы не хотите испытать удачу в сражении с ловкими эльфами.' 
            },
            raceButtonText: [{
                elf: {
                    en: 'You\'re going to greet your elven brothers and talk with them.',
                    ru: 'Вы собираетесь поздороваться с вашими эльфийскими братьями и поговорить.'
                }
            }]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'Уou defeat the elves one by one, they are fast but you are faster!',
                        ru: 'Вы побеждаете эльфов одного за одним, они быстрые, но вы оказываетесь быстрее!'
                    },
                },
                hero:{
                    xp: 150,
                    gold: 200,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'For a while these elves follow you but then disappear. You successfully leave this dangerous forest.',
                        ru: 'Какое-то время эльфы следят за вами, но потом исчезают. Вы удачно покидаете этот опасный лес.'
                    },
                },
                hero:{
                    xp: 50,
                    gold: 0,
                }
            },
            raceResult: [{
                elf: {
                    text:{
                        mainPageText: {
                            en: 'They greet you too, feed you and give you some gold to help you in your mission.',
                            ru: 'Они вас приветствуют, затем кормят и дают золото для того чтобы помочь вам выполнить вашу миссию.'
                        },
                    },
                    hero:{
                        xp: 100,
                        gold: 200,
                    }
                }
            }],
            deathResult: {
                text:{
                    deathText: {
                        en: 'Those local drunks from the city tavern were right, elves killed you before you could do anything!',
                        ru: 'Те местные пъянчуги из городской таверны были правы, эльфы убили вас до того, как вы успели что-то сделать!'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice',
            raceButtonName: 'race_choice'
        }
    },
];