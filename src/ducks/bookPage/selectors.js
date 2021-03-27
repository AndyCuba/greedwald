const mainPageTextSelector = state => state.book.text.mainPageText;
const firstButtonTextSelector = state => state.book.text?.firstButtonText;
const firstButtonNameSelector = state => state.book.names.firstButtonName;
const secondButtonTextSelector = state => state.book.text.secondButtonText;
const secondButtonNameSelector = state => state.book.names.secondButtonName;
const thirdButtonTextSelector = state => state.book.text.thirdButtonText;
const thirdButtonNameSelector = state => state.book.names.thirdButtonName;
const raceButtonTextSelector = state => state.book.text.raceButtonText;
const raceButtonNameSelector = state => state.book.names.raceButtonName;
const xpSelector = state => state.book.hero.xp;
const goldSelector = state => state.book.hero.gold;
const itemCostSelector = state => state.book.itemCost;
const difficultySelector = state => state.book.currentDifficulty;
const deathTextSelector = state => state.book.text.deathText;
const heroNameSelector = state => state.book.hero.heroName;
const imageSelector = state => state.book.image;

export { 
    mainPageTextSelector,
    firstButtonTextSelector, 
    firstButtonNameSelector, 
    secondButtonTextSelector, 
    secondButtonNameSelector,
    thirdButtonTextSelector,
    thirdButtonNameSelector,
    raceButtonTextSelector,
    raceButtonNameSelector,
    xpSelector,
    goldSelector,
    itemCostSelector,
    difficultySelector,
    deathTextSelector,
    heroNameSelector,
    imageSelector
};
