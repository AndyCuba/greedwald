import city1i from '../images/city1i.jpg';
import city2i from '../images/city2i.jpg';
import city4i from '../images/city4i.jpg';
import city5i from '../images/city5i.jpg';
import city7i from '../images/city7i.jpg';
import city8i from '../images/city8i.jpg';

//Trade quests first button name should always be 'trade' and attempt to buy thing;
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
                en: 'In the city you take the task to kill the local witch, but when you go to sleep she finds you and attacks!',
                ru: 'В городе вы берете задание на убийство местной ведьмы, но когда вы ложитесь спать она находит вас и нападает!'
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
                        en: 'Congrats! You killed the witch!',
                        ru: 'Вы смогли уничтожить ведьму!'
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
        },
        names: {
            firstButtonName: 'first_choice',
            secondButtonName: 'second_choice'
        }
    },
    // tavern fight
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
    // operating gang
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
    // merchant tregmaul 4
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
                    gold: 500,
                    artifact: 'Tregmaul Sword'
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
        itemCost: 500,
        names: {
            firstButtonName: 'trade',
            secondButtonName: 'second_choice'
        }
    },
    // robber Konran 5
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
    // girl and basket 6
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
    //noble ring 7
    {
        id: 7,
        name: 'Noble ring',
        difficulty: 3,
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
                            artifact: 'Abyss Dagger'
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
                            artifact: 'Elven ring of Wisdom'
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
    // dumb Wendells 8
    {
        id: 8,
        name: 'Noob vikings',
        image: city8i,
        difficulty: 20,
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
];