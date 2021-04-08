import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  mainPageTextSelector,
  firstButtonTextSelector,
  firstButtonNameSelector,
  secondButtonTextSelector,
  secondButtonNameSelector,
  thirdButtonNameSelector,
  thirdButtonTextSelector,
  difficultySelector,
  deathTextSelector,
  xpSelector,
  heroNameSelector,
  goldSelector,
  itemCostSelector,
  raceButtonTextSelector,
  raceButtonNameSelector,
  imageSelector,
  artifactsSelector
} from '../../ducks/bookPage/selectors';
import { ACTION_TURN_BOOKPAGE } from '../../ducks/bookPage/actions';
import {
  ACTION_TOGGLE_TRANSITION,
  animateTransition,
} from '../../ducks/animations';
import { 
  PageWrapper,
  ButtonWrapper, 
  Image, 
  MainTextWrapper, 
  BookWrapper
} from './style';
import Header from '../Header/Header';
import Death from '../Death/Death';
import { languageSelector } from '../../ducks/language';
import HeroPick from '../HeroPick/HeroPick';
import { ACTION_CHANGE_START_BUTTON } from '../../ducks/startButton';
import Inventory from '../Inventory/Inventory';

const Page = (props) => {
  const dispatch = useDispatch();
  //Selectors
  const mainText = useSelector(mainPageTextSelector);
  const isHeroPicked = useSelector(heroNameSelector);
  const firstButtonText = useSelector(firstButtonTextSelector);
  const firstButtonName = useSelector(firstButtonNameSelector);
  const secondButtonText = useSelector(secondButtonTextSelector);
  const secondButtonName = useSelector(secondButtonNameSelector);
  const thirdButtonText = useSelector(thirdButtonTextSelector);
  const thirdButtonName = useSelector(thirdButtonNameSelector);
  const raceButtonText = useSelector(raceButtonTextSelector);
  const raceButtonName = useSelector(raceButtonNameSelector);
  const isAnimated = useSelector(animateTransition);
  const xp = useSelector(xpSelector);
  const lvl = Math.floor(xp / 100);
  const gold = useSelector(goldSelector);
  const itemCost = useSelector(itemCostSelector)
  const currentDifficulty = useSelector(difficultySelector);
  const deathText = useSelector(deathTextSelector);
  const english = useSelector(languageSelector);
  const questImage = useSelector(imageSelector);
  const uniqueArtifacts = new Set(useSelector(artifactsSelector));

  const handleClick = (e) => {
    
    dispatch(ACTION_TURN_BOOKPAGE(e.target.name, isHeroPicked, gold - itemCost));

    dispatch(ACTION_TOGGLE_TRANSITION);
  };

  const calculateDeathPercentage = (difference) => {
    if(5 < difference < 10) {
      return 0.4;
    } else if (10 <= difference <= 30){
      return 0.6;
    } else if (difference > 30){
      return 0.85;
    } else {
      return 0.2;
    };
  };

  const calculateDeathChance = (buttonName, raceAdvantage = 0) => {
    console.log('dangerous',(currentDifficulty - raceAdvantage - (uniqueArtifacts.size * 20)) > lvl, (currentDifficulty - raceAdvantage - (uniqueArtifacts.size * 20)));
    if((currentDifficulty - raceAdvantage - (uniqueArtifacts.size * 20)) > lvl 
      && (buttonName !== 'death') 
      && (buttonName !== 'first_choice_safe') 
      && (buttonName !== 'second_choice_safe')) {
      const random = Math.random();
      const difference = currentDifficulty - lvl;
      return (random > calculateDeathPercentage(difference)) ? buttonName : 'death';
    } else {
      return buttonName;
    };
  };

  const returnToHome = () => {
    dispatch(ACTION_CHANGE_START_BUTTON);
    dispatch(ACTION_TOGGLE_TRANSITION);
    props.history.goBack();
  };

  useEffect(() => {
    dispatch(ACTION_TOGGLE_TRANSITION);
  }, [mainText, dispatch]);

  return deathText ? (
    <BookWrapper isAnimated={isAnimated}>
      <Death deathText={deathText} />
    </BookWrapper>
  ) : ( isHeroPicked ?
    (<PageWrapper>
      <Header />
      <Inventory />
      <BookWrapper isAnimated={isAnimated}>
        
        <MainTextWrapper>
          {questImage && <Image background={questImage}/>}
          <p>{english ? mainText.en : mainText.ru}</p>
        </MainTextWrapper>
        <ButtonWrapper>
          {(firstButtonText.en || firstButtonText.ru) && (
            <button name={calculateDeathChance(firstButtonName)} onClick={handleClick}>
              {english ? firstButtonText.en : firstButtonText.ru}
            </button>
          )}
          {(secondButtonText?.en || secondButtonText?.ru) && (
            <button name={calculateDeathChance(secondButtonName)} onClick={handleClick}>
              {english ? secondButtonText.en : secondButtonText.ru}
            </button>
          )}
          {(thirdButtonText?.en || thirdButtonText?.ru) && (
            <button name={calculateDeathChance(thirdButtonName)} onClick={handleClick}>
              {english ? thirdButtonText.en : thirdButtonText.ru}
            </button>
          )}
          {(raceButtonText && raceButtonText[0] !== undefined) ? (
            <button name={calculateDeathChance(raceButtonName, 15)} onClick={handleClick}>
              {english ? raceButtonText[0].en : raceButtonText[0].ru}
            </button>
          ) : null}
          <button onClick={returnToHome}>
            {english ? "To Home" : "Вернуться в Меню"}
          </button>
        </ButtonWrapper>
      </BookWrapper>
    </PageWrapper>) : <HeroPick />
  );
};

export default Page;
