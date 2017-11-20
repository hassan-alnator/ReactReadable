import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNotFound from './components/common/404'
import Navigation from './components/common/Navigation'
import Toolbar from './components/common/Toolbar'
import MainPageContainer from './containers/MainPageContainer'
import './App.css';

const App = () => (
  <div className="App">
    <Navigation />
    <div className="container">
      <Switch>
        <Route exact path="/" component={MainPageContainer} />
        <Route component={PageNotFound} />
      </Switch>
      <Toolbar />
    </div>
  </div>
)


export default App;
