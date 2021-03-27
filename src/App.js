import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import styled from 'styled-components';

import Introduction from './components/Introduction/Introduction';
import Page from './components/Page/Page';
import BackgroundMusic from './components/Audio/Audio';
import LanguageButton from './components/LanguageButton/LanguageButton';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import HeroPick from './components/HeroPick/HeroPick';


const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: rgba(21, 137, 183, 0.21);
  cursor: pointer;
`

function App() {
  return (
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <GlobalStyle />
        <BackgroundMusic />
        <LanguageButton />
        <Switch>
          <Route exact path="/" component={Introduction}/>
          <Route path="/hero" component={HeroPick} />
          <Route path="/page" component={Page} />
        </Switch>
      </ModalProvider>
  );
}

export default App;
