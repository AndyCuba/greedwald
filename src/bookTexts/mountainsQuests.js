import mountains1i from '../images/mountains1i.jpg';
import mountainsBG1 from '../images/mountainsBG1.jpg';

export const mountainQuests = [
    /* Dragon Killbeggan 1 */
    {
        id: 1,
        name: 'Dragon Killbeggan',
        image: mountains1i,
        background: mountainsBG1,
        difficulty: 90,
        //background: ... ;// to change the main bg in any quest
        text:{
            mainPageText: {
                en: 'Near the Mynyddraig mountains you find a small church. The abbot of this church promises to pay you for the killing of the dragon, named Killbeggan, which has been attacking all travelers in the local area for several months. In the future, you will have to kill a more dangerous dragon, so you think that practice will not hurt.',
                ru: 'Возле гор Миниддрэйг Вы находите маленькую церковь. Настоятель этой церквушки обещает заплатить за уничтожение дракона "Киллбеггана", который уже несколько месяцев нападает на всех путников в окрестности. В будущем Вам предстоит убить более опасного дракона, так что практика не помешает.'
            },
            firstButtonText: {
                en: 'Go to the mountains along the footpath. This way you won\'t be able to take him by surprise, but you will get tired less.',
                ru: 'Отправиться в горы по тропинке. Так Вы не сможете застать его врасплох, но зато меньше устанете.'
            },
            secondButtonText: {
                en: 'Try to climb the mountain.',
                ru: 'Попытаться подняться в гору.'
            },
            nextButtons: {
                prevFirstChoice: {
                    firstButtonText: {
                        en: 'Engage in an honest duel with the dragon, hoping that you have the strength to fight with him.',
                        ru: 'Вступить в честный поединок с драконом, рассчитывая на то, что Вам хватит сил с ним справиться.'
                    },
                    secondButtonText: {
                        en: 'Try to escape, you still have time to do it!',
                        ru: 'Попытаться сбежать, у Вас еще есть время это сделать!'
                    }
                },
                prevSecondChoice: {
                    firstButtonText: {
                        en: 'Attack from behind and deliver a strong blow to the wing area.',
                        ru: 'Напасть сзади и нанести сильный удар в область крыла.'
                    },
                    secondButtonText: {
                        en: 'Attack from behind and deliver a strong blow to the back.',
                        ru: 'Напасть сзади и нанести сильный удар в область спины.'
                    }
                },
            }
        },
        results: {
            prevResults: {
                firstResult: {
                    text:{
                        mainPageText: {
                            en: 'In the distance, you see a huge blue dragon. He also noticed you and begins to approach. At first glance, you can say that he has very strong scales ...',
                            ru: 'Вдалеке Вы видите огромного синего дракона. Он тоже заметил Вас и начинает приближаться. С первого взгляда можно сказать, что у него очень крепкая чешуя...'
                        }
                    }
                },
                secondResult: {
                    text:{
                        mainPageText: {
                            en: 'You are wasting your day to climb the mountain, but you manage to get close to the sleeping dragon from behind. Now you have decide what to do next.',
                            ru: 'Вы тратите целый день на то, чтобы забраться в гору, но Вам удается подобраться к спящему дракону сзади. Теперь вам необходимо решить что делать дальше.'
                        }
                    }
                }
            },
            nextResults: {
                first: {
                    firstResult: {
                        text:{
                            mainPageText: {
                                en: 'After a long fight, using all your knowledge you find a weak point under the Killbeggan\'s wing and slay him. After that you climb up to his nest and take all treasures.',
                                ru: 'После продолжительной битвы, используя все знания Вы находите слабое место у крыла дракона и убиваете его. После этого Вы поднимаетесь в его гнездо и забираете все его сокровища.'
                            }
                        },
                        hero:{
                            xp: 500,
                            gold: 500,
                        }
                    },
                    secondResult: {
                        text:{
                            mainPageText: {
                                en: 'You cowardly save your life.',
                                ru: 'Вы трусливо спасаете свою жизнь.'
                            },
                        },
                        hero:{
                            xp: 150,
                            gold: 0,
                        }
                    }
                },
                second: {
                    firstResult: {
                        text:{
                            mainPageText: {
                                en: 'You deliver a fatal blow to the weakest point of the dragon, after which he dies. After that you take all his treasures.',
                                ru: 'Вы наносите смертельный удар в самое слабое место дракона после чего он погибает, а вы забираете все его сокровища.'
                            }
                        },
                        hero:{
                            xp: 1000,
                            gold: 500,
                        }
                    },
                //     secondResult: {
                //         text:{
                //             mainPageText: {
                //                 en: 'You imprisoned her.',
                //                 ru: '.'
                //             },
                //         },
                //         hero:{
                //             xp: 5000,
                //             gold: 100000,
                //         }
                //     }
                }
            },
            deathResult: {
                text:{
                    deathText: {
                        en: 'The mighty Killbeggan froze you to death with his breath!',
                        ru: 'Могущественный Киллбегган заморозил вас насмерть своим дыханием!'
                    }
                }
            }
        },
        names: {
            nextNames: {
                first: {
                    firstButtonName: 'first_choice',
                    secondButtonName: 'second_choice_safe'
                },
                second: {
                    firstButtonName: 'first_choice_safe',
                    secondButtonName: 'death'
                }
            },
            firstButtonName: 'prev_first_choice',
            secondButtonName: 'prev_second_choice'
        }
    }
];
