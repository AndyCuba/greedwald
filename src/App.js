import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Introduction from './components/Introduction/Introduction';
import Page from './components/Page/Page';
import BackgroundMusic from './components/Audio/Audio';
import LanguageButton from './components/LanguageButton/LanguageButton';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import HeroPick from './components/HeroPick/HeroPick';
import Preloader from './components/Preloader/Preloader';
import { loadIntroductionSelector } from './ducks/fetching';


const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: rgba(21, 137, 183, 0.21);
  cursor: pointer;
`

function App() {
  const loading = useSelector(loadIntroductionSelector);

  return (
    loading ? (<Preloader />) :
    (<ModalProvider backgroundComponent={SpecialModalBackground}>
      <GlobalStyle />
      <BackgroundMusic />
      <LanguageButton />
      <Switch>
        <Route exact path="/" component={Introduction}/>
        <Route path="/hero" component={HeroPick} />
        <Route path="/page" component={Page} />
      </Switch>
    </ModalProvider>)
  );
}

export default App;
