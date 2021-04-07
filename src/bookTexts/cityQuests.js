import city1i from '../images/city1i.jpg';
import city2i from '../images/city2i.jpg';
import city4i from '../images/city4i.jpg';
import city5i from '../images/city5i.jpg';
import city7i from '../images/city7i.jpg';
import city8i from '../images/city8i.jpg';
import city9i from '../images/city9i.jpg';
import city11i from '../images/city11i.png';


import abyssDagger from '../images/abyssDagger.svg';
import tregmaulSword from '../images/tregmaulSword.svg';
import suredinHammer from '../images/suredinHammer.svg';
import ringOfWisdom from '../images/ringOfWisdom.svg';

//Trade quests first button name should always be 'trade' and attempt to buy item/artifact;
//Difficulty 0 quests may not contain deathText;
//Difficulty > 0 quests may cause death and should contain death variant;
//Button names with "_safe" at the end won't cause death;

export const cityQuests = [
    {
        id: 1,
        difficulty: 1,
        //background: ... ;// to change the main bg in any quest
        image: city1i,
        text:{
            mainPageText: {
                en: 'In the city church you take the task to kill the famous witch, Morena Hallewell. When you go to sleep in the tavern she finds you and attacks!',
                ru: 'В городской церкви Вы берете задание на убийство известной ведьмы, Морены Холлэвелл. Как только Вы ложитесь спать в таверне она находит вас и нападает!'
            },
            firstButtonText: {
                en: 'Try to kill evil witch.',
                ru: 'Попытаться убить злобную ведьму.'
            },
            secondButtonText: {
                en: 'Try to run and save your miserable life!',
                ru: 'Попытаться сбежать и спасти свою жалкую жизнь!'
            }
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'Using all the skills that you managed to learn you defeat her. The abbot pays you the promised gold.',
                        ru: 'Используя все навыки, которые вам удалось освоить вы побеждаете ее! Аббат платит вам обещанное золото.'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 100,
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
                    xp: 50,
                    gold: 0,
                }
            },
            deathResult: {
                text:{
                    deathText: {
                        en: 'Her spells were too strong for you, she paralized you and stubbed you like a pig!',
                        ru: 'Ее чары оказались слишком сильными, она парализовала вас, а затем зарезала как свинью!'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice'
        }
    },
    /* tavern fight 2 */
    {
        id: 2,
        difficulty: 0,
        image: city2i,
        text:{
            mainPageText: {
                en: 'In the city tavern you find your sworn enemy. You used to serve the king together, but then he set you up.',
                ru: 'В городской таверне вы встречаете вашего заклятого врага. Когда то вы вместе служили королю, но затем он вас подставил.'
            },
            firstButtonText: {
                en: 'Drink two more beers and start a fight.',
                ru: 'Выпить еще две кружки пива и начать драку.'
            },
            secondButtonText: {
                en: 'Try to use your stealth skills and steal his bag, for which he most likely does not look because he starts to get drunk...',
                ru: 'Попытаться применить ваши навыки скрытности и украсть его сумку, за которой он скорей всего не следит, потому что начинает пъянеть...'
            }
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You got drunk and had a good fight in the tavern, after which you takes some trophies from your opponent!',
                        ru: 'Вы напились и удачно устроили драку в таверене, после которой вы забираете несколько трофеев у вашего оппонента!'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 50,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You successfully steal the bag from your drunk opponent. Inside this bag you find a lot of gold that could really come in handy.',
                        ru: 'Вы удачно крадете сумку вашего пъяного оппонента. Внутри нее вы находите золото, которое наверняка вам пригодится.'
                    },
                },
                hero:{
                    xp: 50,
                    gold: 100,
                }
            },
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice'
        }
    },
    /* operating gang 3 */
    {
        id: 3,
        difficulty: 0,
        text:{
            mainPageText: {
                en: 'In the local tavern you find out, that a dangerous gang is operating in the city.',
                ru: 'В местной таверне вы узнаете о том, что в городе орудует опасная банда.',
            },
            firstButtonText: {
                en: 'Try to track down and kill the gang leaders.',
                ru: 'Попытаться выследить и убить лидеров банды.'
            },
            secondButtonText: {
                en: 'You think you can join the gang in order to earn extra money.',
                ru: 'Вы считаете, что можно присоединиться к банде, для того, чтобы подзаработать.' 
            }
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You successfully track down everyone and successfully eliminate the gang.',
                        ru: 'Вы успешно выслеживате всех до единого и успешно устраняете их.'
                    },
                },
                hero:{
                    xp: 100,
                    gold: 100,
                }
            },
            deathResult: {
                text:{
                    deathText: {
                        en: 'You died trying to join bandits!',
                        ru: 'Вы погибли когда пытались присоединиться к бандитам!'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'death'
        }
    },
    /* merchant tregmaul 4 (artifacts - tregmaul sword)*/
    {
        id: 4,
        name: 'Merchant Tregmaul',
        difficulty: 0,
        image: city4i,
        text:{
            mainPageText: {
                en: 'In the local market you find a cunning dwarf-merchant, that sells dangerous artifacts.',
                ru: 'На местном рынке вы сталкиваетесь с хитрым дворфом-торговцем, который продает опасные артефакты.',
            },
            firstButtonText: {
                en: 'You definetely need one. That lengendary Tregmaul Sword will help to complete your mission.',
                ru: 'Вам определенно нужен такой артефакт. Этот легендарный Трегмольский Меч поможет вам выполнить свое задание.'
            },
            secondButtonText: {
                en: 'You think that a couple of beers in a tavern will help you more than all these so-called "artifacts"',
                ru: 'Вы считаете что пара кружек пива в таверне поможет вам больше, чем все эти так называемые "артефакты"' 
            }
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You bought this artifact. Maybe it\'s not sharp as the merchant says, but it will definetely help you.',
                        ru: 'Вы покупаете этот артефакт. Возможно он не такой острый как говорил торговец, но он определенно поможет вам.'
                    },
                },
                hero:{
                    xp: 500,
                    gold: 0,
                    artifact: {
                        img:tregmaulSword,
                        name: {
                            en: 'Tregmaul Sword',
                            ru: 'Трегмольский Меч'
                        },
                        description: {
                            en: 'Dangerous Sword blablabla',
                            ru: 'Опаснейший меч блаблабла'
                        }
                    }
                } 
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You successfully drink three beers in the local tavern.',
                        ru: 'Вы успешно выпиваете три пива в местной таверне.'
                    },
                },
                hero:{
                    xp: 0,
                    gold: 0,
                }
            },
            failResult: {
                text:{
                    mainPageText: {
                        en: 'The merchant demanded a high price, and you did not have so much gold, so you were left with nothing.',
                        ru: 'Торговец потребовал много денег, но у вас не оказалось столько и вы остались не с чем'
                    },
                },
                hero:{
                    xp: 0,
                    gold: 0,
                }
            }
        },
        itemCost: 1500,
        names: {
            firstButtonName: 'trade',
            secondButtonName: 'second_choice'
        }
    },
    /* robber Konran 5 */
    {
        id: 5,
        name: 'Rob? Robber!',
        difficulty: 3,
        image: city5i,
        text:{
            mainPageText: {
                en: 'On a city street you find a wanted notice - "Wanted, dangerous robber "Rob Konran" (actually you heard about him, became famous after robbing a local baron), reward - 50 gold from our Great Noble and Generous Baron Ceterus Pallback!',
                ru: 'На одной из улиц города вы находите плакат с розыском - "Разыскивается, опасный грабитель "Роб Конран" (вы уже слышали о нем, стал известным после того, как ограбил местного барона), награда - 50 золотых от нашего Великого Благородного и Щедрого Барона Цетеруса Полбэка!'
            },
            firstButtonText: {
                en: 'Is it a joke? Only 50 gold reward for dangerous robber? You\'re not going to do these stupid investigations almost for free.',
                ru: 'Это что, шутка? Всего 50 золотых за опаснейшего грабителя? Вы не собираетесь заниматься этими глупыми расследованиями бесплатно.'
            },
            secondButtonText: {
                en: 'You just need money, and no other tasks are expected in the near future, so you decide to find him.',
                ru: 'Вам как раз нужны деньги а других заданий в ближайшее будущее не предвидится, поэтому вы решаете найти его.'
            },
            raceButtonText: [{
                human: {
                    en: 'You\'re going to use your human charm to find traces of this robber and to track him down. Some drunks from tavern saw someone who looks like him in the red light district. No woman can resist you!',
                    ru: 'Вы собираетесь использовать свое человеческое обаяние для того, чтобы выследить этого грабителя. Пьянчуги в таверне говорили о том, что видели кого-то похожего на него в районе красных фонарей. Ни одна женщина не устоит перед вами!'
                }
            }]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'After few pessimistic grumbles you go away. A few days later you heard that he robbed the baron again, how ironic, isn\'t it?',
                        ru: 'Немного поворчав вы уходите. Спустя несколько дней вы узнаете что он ограбил барона еще раз, как иронично, не правда ли?'
                    }
                },
                hero:{
                    xp: 15,
                    gold: 0,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You successfully hold an investigation. In the tunnels under the city you find secret group of thieves. They call themselves "Sparrow Guild" and worship thief God. They are so rich that they just pay you to be silent. With pockets full of gold, you decide not to tell anyone about this. A few days later you heard that the lengendary, invincible Rob Konran robbed the baron one more time, how ironic, isn\'t it?',
                        ru: 'Вы удачно проводите расследование. В туннелях под городом вы находите секретную группировку воров. Они называют себя "Гильдия Воробья" и поклоняются богу воров. Они настолько богаты, что просто платят вам за молчание. С карманами полными денег вы реашете никому не рассказывать о том, что случилось. Спустя несколько дней вы узнаете, что легендарный, неуязвимый Роб Конран ограбил барона еще раз, как иронично, не правда ли?'
                    },
                },
                hero:{
                    xp: 200,
                    gold: 200,
                }
            },
            raceResult: [{
                human: {
                    text:{
                        mainPageText: {
                            en: 'You are definitely having a good time in red light district. For a while you even forget why you came here and the thief finds you first. In a moment, you draw the sword, but then you and the thief realize that actually you know each other. This is your old friend with whom in childhood you fought using wooden swords. You drink a beer in a local tavern, he gives you some money to help and then you say goodbye to each other. A few days later you heard that the lengendary, invincible Rob Konran robbed the baron one more time, how ironic, isn\'t it?',
                            ru: 'Вы олично проводите время в районе красных фонарей. На какое-то время вы вообще забываете зачем вы здесь и тот самый вор находит вас первым. Моментально вы обнажаете меч, но затем, вы понимаете, что вы знаете этого человека. Это ваш старый друг из детства с которым вы сражались еще на древянных мечах. Вы выпиваете пива, друг дает вам немного денег чтобы помочь и вы прощаетесь. Спустя несколько дней вы узнаете, что легендарный, неуязвимый Роб Конран ограбил барона еще раз, как иронично, не правда ли?'
                        },
                    },
                    hero:{
                        xp: 300,
                        gold: 100,
                    }
                }
            }],
            deathResult: {
                text:{
                    deathText: {
                        en: 'This thief was too tough for you, when you begin your investiagation a poisoned arrow hits you right in the back!',
                        ru: 'Этот вор оказался вам не по-зубам, как только вы начинаете расследование отравленная стрела попадает вам прямо в спину!'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice_safe',
            secondButtonName: 'second_choice',
            raceButtonName: 'race_choice'
        }
    },
    /* girl and basket 6 */
    {
        id: 6,
        name: 'Sparrow Guild acts',
        difficulty: 1,
        text:{
            mainPageText: {
                en: 'On a city street you see a robber trying to take the girl\'s basket. You should quickly decide what to do.',
                ru: 'На одной из улиц города вы видите грабителя который пытается отобрать корзину у девушки. Вам следует быстро решить что делать.'
            },
            firstButtonText: {
                en: 'Of course you\'re going to help her. As you know, such robbers always are the weakest enemies.',
                ru: 'Конечно же вы собираетесь помочь ей. Как известно, такие грабители обычно самые слабые.'
            },
            secondButtonText: {
                en: 'You urgently need money, you decide to help this puny thief to take the basket.',
                ru: 'Вам срочно нужны деньги, вы решаете помочь этому тщедушному вору отобрать корзину у девушки.'
            },
            raceButtonText: [
                {
                    dwarf: {
                        en: 'You haven\'t used your hammer, forged in Kardul-Keraque mountains, for a long time. You decide to kill him. Nothing will stop an angry dwarf who hasn\'t drunk for several days!',
                        ru: 'Вы уже давно не использовали свой молот, выкованный в горах Кардул-Керака. Вы решаете убить вора. Ничто не отсановит злого дворфа, который не пил уже несколько дней!'
                    }
                },
                {
                    elf: {
                        en: 'It would be very easy to neutralize him by shooting him in his leg! Take your bow made by artisans of elven clan Elidrus and make a shot.',
                        ru: 'Будет очень просто его нейтрализовать выстрелив ему в ногу. Вы достаете лук, сделанный мастерами эльфийского клана Элидрус и делаете выстрел.'
                    }
                }
            ]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You grab this pathetic robber and save the girl\'s basket. After that, the city guard of Baron Pallback appears, they thank you and give you some gold for capturing the criminal.',
                        ru: 'Вы хватаете этого жалкого грабителя и спасаете корзину девушки. После этого, появляется стража барона Полбэка, они благодарят вас и дают немного денег за поимку преступника.'
                    }
                },
                hero:{
                    xp: 50,
                    gold: 20,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You start trying to take the basket away from the girl too, but the thief runs away and the city guard of Greedwald appears immideately. They take you to the castle, The Great Baron Ceterus Pallback sentence you to a fine of 200 gold coins, after which you are released.',
                        ru: 'Вы тоже начинаете отнимать корзину у девушки, но вор убегает и тут же появляется городская стража Гридвальда. Они отводят вас в замок и Великий Барон Цетерус Полбэк назначает вам штраф в 200 золотых монет, после чего вас отпускают.'
                    },
                },
                hero:{
                    xp: 5,
                    gold: -200,
                }
            },
            raceResult: [
                {
                    dwarf: {
                        text:{
                            mainPageText: {
                                en: 'With one stroke of the hammer you crash the robber\'s skull to pieces(maybe you were too cruel, but now is not the time to think about it). With your actions you scared the girl more than the thief.You apologize for contamination everything with blood, take his gold and leave before the city guards appear.',
                                ru: 'Одним ударом молота вы разносите черепушку грабителя на кусочки(возможно вы слишком жестокий, но сейчас не время об этом думать). Своими действиями вы напугали девушку больше чем вор. Вы извиняетесь за то, что испачкали все кровью, забираете его золото и уходите до того как появляется стража.'
                            },
                        },
                        hero:{
                            xp: 100,
                            gold: 100,
                        }
                    }
                },
                {
                   elf: {
                        text:{
                            mainPageText: {
                                en: 'You fire a well-aimed shot and hit the robber right in the foot. The robber falls and can\'t escape now. After that, the city guard of Baron Pallback appears, they thank you and give you some gold for capturing the criminal.',
                                ru: 'Вы делаете меткий выстрел и попадаете грабителю прямо в ногу. Вор падает и теперь не может сбежать. После этого, появляется стража барона Полбэка, они благодарят вас и дают немного денег за поимку преступника.'
                            },
                        },
                        hero:{
                            xp: 200,
                            gold: 50,
                        }
                    }
                }
            ],
            deathResult: {
                text:{
                    deathText: {
                        en: 'This thief was too tough for you, he pulls out a small dagger and stabs you right in the neck!',
                        ru: 'Этот вор оказался вам не по-зубам, он достает маленьки кинжал и бъет им вас прямо в шею!'
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
    /* noble ring 7 (artifacts - ring of wisdom/ abyss dagger)*/
    {
        id: 7,
        name: 'Noble ring',
        difficulty: 20,
        image: city7i,
        text:{
            mainPageText: {
                en: 'On a city street a well dressed nobleman comes up to you. He offers to carry out his order to rob his opponent. "You can take whatever you want, but bring me his ring, I will pay you only for it!" he says.',
                ru: 'На одной из улиц города к вам подходит хорошо одетый дворянин. Он предлагает вам выполнить его задание по ограблению его противника. "Ты можешь взять все что захочешь, но главное принеси мне его кольцо, я заплачу тебе только за него!" - говорит он.'
            },
            firstButtonText: {
                en: 'You urgently need money, you decide to rob his opponent and to bring him the ring.',
                ru: 'Вам срочно нужны деньги, вы решаете ограбить его оппонента и принести дворянину кольцо.'
            },
            secondButtonText: {
                en: 'You you don\'t want to break the law. You decide to tell the guards what the nobleman is up to.',
                ru: 'Вы не хотите нарушать закон. Вы решаете рассказать стражникам о том, что задумал этот дворянин.'
            },
            raceButtonText: [
                {
                    human: {
                        en: 'You have participated in such cases more than once, you even have some friends from thief guild in the kingdom of people. In this time you will try to get the maximum amount of gold.',
                        ru: 'Вы не раз участвовали в подобных делах, у вас даже есть несколько друзей из гильдии воров в королевстве людей. В этот раз вы попытаетесь получить максимальное количество золота.'
                    }
                },
                {
                    elf: {
                        en: 'You agree to complete the task, but only to find out what this ring is for. You have a strange feeling about this.',
                        ru: 'Вы соглашаетесь выполнить задание но только для того, чтобы узнать для чего это кольцо. У вас странное предчувствие насчет этого.'
                    }
                }
            ]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You sneak into the house, take the ring and take every expensive thing before you hear the sounds of the guard. After that you successfully escape, you give the ring to the nobleman and sell the rest to the pawnshop. Well now you can have a beer.',
                        ru: 'Вы успешно проникаете в дом, крадете кольцо и берете каждую дорогую вещью. Затем вы слышите звуки стражи, после чего успешно сбегаете. Вы отдаете кольцо дворянину а остальное сдаете в ломбард. Что ж, теперь можно выпить пива.'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 200,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You tell about this suspicious person to the city guard. They thank you for your help, but as usual they do nothing and don\'t even try to search for this person.',
                        ru: 'Вы рассказываете городской страже об этой подозрительной личности. Они благодарят вас за помощь, но как обычно ничего не делают и даже не пытаются искать этого человека.'
                    },
                },
                hero:{
                    xp: 15,
                    gold: 0,
                }
            },
            raceResult: [
                {
                    human : {
                        text:{
                            mainPageText: {
                                en: 'You sneak into the house, take the ring and take every expensive thing and even more, you find legendary artifact - Abyss Dagger, dagger made of abyssal obsidian by dark elves. After that you successfully escape, you give the ring to the nobleman and sell the rest to the pawnshop. You keep the dagger for yourself, it will definitely come in handy in the future.',
                                ru: 'Вы проникаете в дом, крадете кольцо, а так же каждую дорогую вещь и даже больше, вы находите легендарный артефакт - Кинжал Бездны, созданный из обсидиана темными эльфами. После этого вы бесшумно покидаете его дом. Вы отдаете кольцо дворянину, а остальное сдаете в ломбард. Кинжал вы оставляете себе, в будущем он определенно пригодится вам.'
                            },
                        },
                        hero:{
                            xp: 120,
                            gold: 250,
                            artifact: {
                                img: abyssDagger,
                                name: {
                                    en: 'Abyss Dagger',
                                    ru: 'Кинжал Бездны'
                                },
                                description: {
                                    en: 'Dangerous Dagger blablabla',
                                    ru: 'Опаснейший кинжал блаблабла'
                                }
                            }
                        }
                    }
                },
                {
                   elf: {
                        text:{
                            mainPageText: {
                                en: 'You begin your investigation. After you find out everything you can in a local tavern, you sneak into the house, and find the ring, it`s a relic, lengendary Elven ring of Wisdom, made by eastern High Elves. You successfully escape from the house and decide to keep this ring for yourself, later you will return it to your elven brothers.',
                                ru: 'Вы начинаете свое расследование. Разузнав все что можно в местной таверне вы проникаете в дом и находите кольцо - это реликвия, легендарное Кольцо эльфийской мудрости, созданное восточными Высшими Эльфами. Вы успешно покидаете дом и решаете пока оставить кольцо у себя, позже вы отдадите его своим эльфийским братьям.'
                            },
                        },
                        hero:{
                            xp: 300,
                            gold: 20,
                            artifact: {
                                img: ringOfWisdom,
                                name: {
                                    en: 'Ring of Wisdom',
                                    ru: 'Кольцо Мудрости'
                                },
                                description: {
                                    en: 'Dangerous ring blablabla',
                                    ru: 'Опаснейший кольцо блаблабла'
                                }
                            }
                        }
                    }
                }
            ],
            deathResult: {
                text:{
                    deathText: {
                        en: 'Apparently someone hired killers, who stabbed you like a pig in the alley!',
                        ru: 'Видимо кто-то нанял убийц, которые зарезали вас в подворотне как свинью!'
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
    /* dumb Wendells 8 */
    {
        id: 8,
        name: 'Noob vikings',
        image: city8i,
        difficulty: 40,
        text:{
            mainPageText: {
                en: 'In the port of the city you meet northern barbarians (they call themselves Wendells). On the way to Gridwald they got caught in a storm and lost many crew members. Their drakkar needs to sail a few more miles to reach their destination, so they are now looking for a few people to help them. "For a good fee!" - shouted their chief WolfBiorn (famous sailor, as some people said in the port).',
                ru: 'В порту города вы встречаете северных варваров (они называют себя Венделлами). По пути в Гридвальд они попали в шторм и потеряли много членов экипажа. Им осталось проплыть еще несколько миль до своего пункта назначения, поэтому они ищут несколько людей в помощь. "За хорошую плату" - кричал их вождь ВульфБьорн (известный мореход, как говорили люди в порту).'
            },
            firstButtonText: {
                en: 'You decide that sailing with these Wendells is too dangerous - their drakkar will soon fall apart, and these barbarians are not very smart at all.',
                ru: 'Вы решаете что плыть с этими Венделлами слишком опасно - их драккар скоро развалится, а сами варвары не очень умны.'
            },
            secondButtonText: {
                en: 'You got curious and decided to help them, hoping that they will pay really well.',
                ru: 'Вам стало любопытно и вы решили помочь им, надеясь на то, что они действительно хорошо заплатят.'
            },
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You leave the port and the Wendells sail away. In a few days you will hear in the tavern that they were caught in a storm again and all drowned.',
                        ru: 'Вы покидаете порт, а Венделлы отплывают. Через несколько дней вы услышите в таверне, что они снова попали в шторм и все утонули.'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 0,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'As soon as you sail away with Wendells the storm begins. It turns out that they are not very lucky sailors and the drakkar crashes on rocks with a bang. You and the barbarians fall into the water, the waves are too large and you don\'t have enough strength to swim out. After a while you miraculously wake up on the shore, apparently all the barbarians drowned. Well, at least you found out who these Wendels are.',
                        ru: 'Как только вы отплываете с Венделлами начинается шторм. Оказывается, что они не очень удачливые моряки, драккар с грохотом разбивается о скалы. Вы вместе с варварми падаете в воду, волны оказываются слишком большими и вам не хватает сил чтобы выплыть. Cпустя какое-то время вы чудом просыпаетесь на берегу, видимо все варвары утонули. Что ж, по крайней мере теперь вы узнали кто такие Венделлы.'
                    },
                },
                hero:{
                    xp: 200,
                    gold: 0,
                }
            },
            deathResult: {
                text:{
                    deathText: {
                        en: 'As soon as you sail away with Wendells the storm begins. It turns out that they are not very lucky sailors and the drakkar crashes on rocks with a bang. You and the barbarians fall into the water, the waves are too large and you don\'t have enough strength to swim out. You drown with the Wendells...',
                        ru: 'Как только вы отплываете с Венделлами начинается шторм. Оказывается, что они не очень удачливые моряки, драккар с грохотом разбивается о скалы. Вы вместе с варварми падаете в воду, волны оказываются слишком большими и вам не хватает сил чтобы выплыть. Вы тонете вместе с Венделлами...'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice_safe',
            secondButtonName: 'second_choice'
        }
    },
    /* mad Bardano 9 (artifacts - suredin hammer)*/
    {
        id: 9,
        name: 'Mad Bardano',
        image: city9i,
        difficulty: 40,
        text:{
            mainPageText: {
                en: 'On the street of the city you meet the huge crowd and an expensive manor surrounded by city guards. "HALT! The mad wizard is hiding in this house!" - the city guard tells you. You see fireballs flying out of the house. The city guards are hiding behind a high fence and apparently can\'t do anything.',
                ru: 'На одной из улиц города Вы встречаете огромную толпу и дорогую усадьбу, окруженную городской стражей. "СТОЯТЬ! Безумный волшебник прячется в этом доме!" - кричит вам стражник. Вы видите как огенные шары вылетают из особняка. Городская стража прячется за высокой оградой усадьбы и видимо ничего не может сделать.'
            },
            firstButtonText: {
                en: 'You think you can deal with this magician. You walk past the guards and prepare to fight with him.',
                ru: 'Вы считаете что сможете справиться с этим магом. Вы проходите мимо стражи и готовитесь вступить в бой.'
            },
            secondButtonText: {
                en: 'You think that dealing with this mage is too hard for you. It looks like he is completely nuts and the city guard are unlikely to pay you much for this. So you leave.',
                ru: 'Вы считаете, что разобраться с этим магом вам будет очень сложно. Видимо он "крепкий орешек", а городская старжа вряд ли заплатит вам хорошо. Поэтому вы решаете уйти.'
            },
            raceButtonText: [
                {
                    dwarf: {
                        en: 'Since you are a dwarf, you have an innate resistance to magic (as well as a craving for beer). You hope this will help you to neutralize him.',
                        ru: 'Так как вы дворф, вы обладаете врожденной устойчивостью к магии (а так же тягой к пиву). Вы надеетесь, что это поможет вам нейтрализовать его.'
                    }
                }
            ]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'You dodge each fireball of the mad wizard, get close to him and strike, but before dying, the magician manages to set fire to his house. In his mansion you see a lot of gold and take with you as much as you can, before the fire starts.',
                        ru: 'Вы уворачиваетесь от каждого огненного шара волшебника-безумца, подбираетесь к нему вплотную и наносите удар, но перед смертью маг успевает поджечь свой дом. В его особняке вы находите много золота и берете с собой столько, сколько можете, до того как разгарается огонь.'
                    }
                },
                hero:{
                    xp: 300,
                    gold: 500,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You are leaving this place. A few days later you will find out that the mad wizard Bardano held out all the day until he accidentally burned his house and himself down.',
                        ru: 'Вы покидаете это место. Спустя несколько дней вы узнаете что безумный маг Бардано держался целый день пока случайно не сжег свой дом и себя вместе с ним.'
                    },
                },
                hero:{
                    xp: 50,
                    gold: 0,
                }
            },
            raceResult: [
                {
                    dwarf : {
                        text:{
                            mainPageText: {
                                en: 'You dodge almost each fireball of the wizard-madman. A fireball that hits you does no damage to you (looks like your magic resistance works). Then for a second you think about the fact, that you already want a beer(looks like craving for beer works too). You get close to him and strike, but before dying, the magician manages to set fire to his house. In his mansion you see a lot of gold and take with you as much as you can, before the fire starts. In his weaponry you also find Suredin\'s Hammer - ancient hammer, forged by dwarves of Grims-Ogr-Keraque.',
                                ru: 'Вы уворачиваетесь почти от каждого огненного шара волшебника-безумца. Шар, который в вас все-таки попадает, не наносит вам урона (видимо ваше сопротивление магии работает). На секунду Вы задумываетесь о том, что уже хотите пива (видимо тяга к пиву тоже раотает). Вы подбираетесь к магу вплотную и наносите удар, но перед смертью маг успевает поджечь свой дом. В его особняке Вы находите много золота и берете с собой столько, сколько можете, до того как разгарается огонь. В его оружейной Вы также находите Молот Суредина - древний молот, выкованный дворфами из Гримс-Огр-Керака.'
                            },
                        },
                        hero:{
                            xp: 320,
                            gold: 350,
                            artifact: {
                                img: suredinHammer,
                                name: {
                                    en: 'Suredin\'s Hammer',
                                    ru: 'Молот Суредина'
                                },
                                description: {
                                    en: 'Dangerous Hammer blablabla',
                                    ru: 'Опаснейший молот блаблабла'
                                }
                            }
                        }
                    }
                }
            ],
            deathResult: {
                text:{
                    deathText: {
                        en: 'The mad wizard turned out to be too powerful and incinerated you like the devil!',
                        ru: 'Безумный маг оказался слишком могущественным и испепелил вас как дьявол!'
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
    /* bandits on the street 10 */
    {
        id: 10,
        name: 'Dangerous drunk street bandits',
        difficulty: 2,
        text:{
            mainPageText: {
                en: 'On the street of the city you meet three drunkards. By their appearance, you can say that they drank for a week or more (and by the smell you can tell that they haven\'t washed for a month). "Your money or your life..." - one of them barely speaks.',
                ru: 'На одной из улиц города Вы встречаете трех пъянчуг. По их внешнему виду вы можете сказать, что они пили недлю, а может и больше (а по запаху можно сказать, что они не мылись месяц). "Кошелек или жизнь..." - едва говорит один из них.'
            },
            firstButtonText: {
                en: 'Apparently they aren\'t capable of anything and don\'t pose a serious threat to you. You decide to teach these inept bandits a lesson.',
                ru: 'Видимо они ни на что не способны и не представляют для вас серьезной угрозы. Вы решаете преподать урок этим неумелым бандитам.'
            },
            secondButtonText: {
                en: 'You aren\'t going to waste time on them, so you decide to just walk by.',
                ru: 'Вы не собираетесь тратить на них время, поэтому решаете просто пройти мимо.'
            },
            raceButtonText: [
                {
                    dwarf: {
                        en: 'For a long time your fists itched, the nature of the dwarf doesn\'t allow you to pass by.',
                        ru: 'Давно у вас чесались кулаки, натура дворфа не дает вам пройти мимо.'
                    }
                }
            ]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'Every drunk gets hit after which every drunk is knocked out. You leave the place with a satisfied smile.',
                        ru: 'Каждый пьяница получает по удару после чего отправляется в нокаут. Вы покидаете это место с довольной улыбкой.'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 0,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You are leaving this place. Drunks try to catch up with you but don\'t stay on their feet and fall.',
                        ru: 'Вы покидаете это место. Пъяницы пытаются догнать вас, но не держаться на ногах и падают.'
                    },
                },
                hero:{
                    xp: 20,
                    gold: 0,
                }
            },
            raceResult: [
                {
                    dwarf: {
                        text:{
                            mainPageText: {
                                en: 'Every drunk gets hit after which is knocked out. You are thirsty, and the beer in the local tavern is expensive, so you take their coins and leave them.',
                                ru: 'Каждый пьяница получает по удару после чего отправляется в нокаут. Вас мучает жажда, а пиво в местной таверне не дешевое, поэтому вы забираете их монеты и уходите.'
                            },
                        },
                        hero:{
                            xp: 100,
                            gold: 25,
                        }
                    }
                }
            ],
            deathResult: {
                text:{
                    deathText: {
                        en: 'It was a stupid idea to fight them without melee weapons. The thugs took out knives and stabbed you in the alley.',
                        ru: 'Это была глупая идея - драться с ними без холодного оружия. Бандиты достали ножи и зарезали вас в подворотне.'
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
     /* gambling man 11 */
    {
        id: 11,
        name: 'Ramble Gamble',
        image: city11i,
        difficulty: 30,
        text:{
            mainPageText: {
                en: 'During your visit to the tavern, a stranger comes up to you. He is dressed well, but a little drunk. He invites you to play a local card game "Devil\'s Hand" with his friends, when they come, but not just play, but help him to cheat them. This stranger promises to give you 20% of the winnings.',
                ru: 'Во время очередного визита в таверну к вам подходит незнакомец. Одет он хорошо, но немного пьян. Он предлагает вам сыграть в местную карточную игру "Рука Дьявола" с его друзьями когда они придут, но не просто сыграть, а помочь ему обыграть их и обмануть. Незнакомец обещает отдать вам 20% от выигрыша.'
            },
            firstButtonText: {
                en: 'Agree to help him, you urgently need money.',
                ru: 'Cогласиться помочь ему, вам срочно нужны деньги.'
            },
            secondButtonText: {
                en: 'You aren\'t going to waste time on this fraud, so you decide order a whisky.',
                ru: 'Вы не собираетесь тратить время на эту аферу, поэтому решаете просто заказать себе виски.'
            },
            raceButtonText: [
                {
                    human: {
                        en: 'As a human you have played this game many times, you will try to play him and his friends.',
                        ru: 'Как человек, вы уже много раз играли в эту игру, вы попытаетесь обыграть его и его друзей.'
                    }
                }
            ]
        },
        results: {
            firstResult: {
                text:{
                    mainPageText: {
                        en: 'After a few games you manage to empty their pockets. The stranger gives you your 20% and then you leave.',
                        ru: 'После нескольких партий вам удается обчитстить их карманы. Незнакомец отдает вам ваши 20% после чего вы уходите.'
                    }
                },
                hero:{
                    xp: 100,
                    gold: 100,
                }
            },
            secondResult: {
                text:{
                    mainPageText: {
                        en: 'You order whiskey and then go to bed, while the players are having a good time.',
                        ru: 'Вы заказываете виски а затем идете спать, в то время как игроки хорошо проводят время.'
                    },
                },
                hero:{
                    xp: 20,
                    gold: -20,
                }
            },
            raceResult: [
                {
                    human: {
                        text:{
                            mainPageText: {
                                en: 'You play them, collect the whole jackpot and leave this place before everyone figure out what happened.',
                                ru: 'Вы обыгрываете их собираете весь куш и покидаете это место до того, как все успевают сообразить, что произошло.'
                            },
                        },
                        hero:{
                            xp: 300,
                            gold: 1000,
                        }
                    }
                }
            ],
            deathResult: {
                text:{
                    deathText: {
                        en: 'It was a stupid idea to try to play the local thugs and their famous leader Rigo. You played them, but on the same night you were stabbed to death by hired assassins.',
                        ru: 'Это была глупая идея - пытаться обыграть местных головорезов и их главу Риго. Вы обыграли их, но в эту же ночь вас зарезали наемные убийцы.'
                    }
                }
            }
        },
        names: {
            firstButtonName: 'first_choice_safe',
            secondButtonName: 'second_choice_safe',
            raceButtonName: 'race_choice'
        }
    },
];