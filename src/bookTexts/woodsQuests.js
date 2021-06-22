import woods2i from '../images/woods2i.jpg';
import woods3i from '../images/woods3i.jpg';
import eredhensArmor from '../images/eredhensArmor.svg';

export const woodsQuests = [
    /* hobgoblin 1 */
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
    /* woods elfs camp 2*/
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
    /* dangerous swamp 3 (artifacts - Eredhen Armour) */ 
    {
        id: 3,
        name: 'dangerous swamp',
        difficulty: 70,
        image: woods3i,
        text:{
            mainPageText: {
                en: 'In the dangerous woods you find a swamp. In the swamp you see a sunken crypt, perhaps this is a part of the ruins of Eredhenians, an ancient people who lived here several millennia ago...',
                ru: 'В опасном лесу вы находите болото. Вы видите в болоте затонувший склеп, возможно это часть руин людей Эредена, древнего народа, который жил здесь несколько тысячелетий назад...',
            },
            firstButtonText: {
                en: 'Anyone on the continent knows, the ancient people of Eredhen were incredibly skillful in the armor and weapons manufacturing, so you decide to check the crypt.',
                ru: 'Любой человек на континенте знает, что древний народ Эредена был невероятно искусен в производстве доспехов и оружия, поэтому вы решаете проверить склеп.'
            },
            secondButtonText: {
                en: 'To get to the crypt you will have to go through the swamp, and what awaits you in the crypt you don\'t know, it\'s better not to go there. You decide to leave this place.',
                ru: 'Чтобы добраться до склепа вам придется пройти через болото, а что вас поджидает в склепе вам не известно, лучше туда не ходить. Вы решаете покинуть это место.' 
            },
            raceButtonText: [{
                elf: {
                    en: 'You have already been in such crypts, and your elven skills will help you to get through the swamp.',
                    ru: 'Вы уже были в таких склепах, а ваша эльфийская сноровка поможет вам пробраться через болото.'
                }
            }]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'After passing through disgusting swamp, you enter the crypt. In the crypt you find an ancient treasury. As soon as you enter there draugrs attack you, but you are too strong for them, blow after blow you kill everyone without giving them a chance. After this fight you rest a while. You take gold from the treasury and in a large chest you find artifact - scale armor forged by Eredhenians. It will help you in the future.',
                        ru: 'Пройдя через гадкое болото, Вы проникаете в склеп. Там Вы находите древнюю сокровищницу. Как только Вы заходите внутрь на вас нападают драугры, но Вы оказываетесь слишком сильным для них, удар за ударом Вы сокрушаете всех ни оставляя им ни единого шанса. Немного отдохнув Вы забираете все золото из сокровищницы, а в большом сундуке Вы находите артефакт - чешуйчатую броню выкованную жителями Эредена. Она определенно поможет вам в будущем.'
                    },
                },
                hero:{
                    xp: 200,
                    gold: 300,
                    artifact: {
                        img: eredhensArmor,
                        name: {
                            en: 'Scale armor of Eredhen',
                            ru: 'Чешуйчатая броня Эредена'
                        },
                        description: {
                            en: 'Dangerous armor blablabla',
                            ru: 'Опаснейшая броня блаблабла'
                        }
                    } 
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You leave the swamp, at least you stay dry.',
                        ru: 'Вы покидаете болото, по крайней мере Вы остались сухим.'
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
                            en: 'Using your agility you pass through disgusting swamp and enter the crypt. In the crypt you find an ancient treasury. As soon as you enter there, draugrs attack you, but you are too dexterous for them, blow after blow you kill everyone without giving them a chance. After this fight you rest a while. You take gold from the treasury and in a large chest you find artifact - scale armor forged by Eredhenians. It will help you in the future.',
                            ru: 'Используя свою ловкость Вы пробираетесь через болото и проникаете в склеп. Там Вы находите древнюю сокровищницу. Как только вы заходите внутрь на вас нападают драугры, но вы оказываетесь слишком ловким для них, удар за ударом вы сокрушаете всех ни оставляя им ни единого шанса. Немного отдохнув вы забираете все золото из сокровищницы, а в большом сундуке вы находите артефакт - чешуйчатую броню выкованную жителями Эредена. Она определенно поможет вам в будущем.'
                        },
                    },
                    hero:{
                        xp: 230,
                        gold: 300,
                        artifact: {
                            img: eredhensArmor,
                            name: {
                                en: 'Scale armor of Eredhen',
                                ru: 'Чешуйчатая броня Эредена'
                            },
                            description: {
                                en: 'Magnificent armor forged during the era of the inhabitants of Eredhen, during the existence of the early elves.',
                                ru: 'Великолепная броня, выкованная в эпоху жителей Эредeна, во времена существования ранних эльфов.'
                            }
                        }
                    }
                }
            }],
            deathResult: {
                text:{
                    deathText: {
                        en: 'In the swamp you meet a killer slug, you manage to kill him, but he poisons you and you die.',
                        ru: 'На болоте Вы встречаете убийцу-слизня, вам удается его убить, но он успевает отравить вас и Вы умираете.'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice_safe',
            raceButtonName: 'race_choice'
        }
    },
];