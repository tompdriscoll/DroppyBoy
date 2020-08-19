import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Splash from './splash/splash'
import HomeContainer from './home/home_container'
import ErrorPage from './error_page'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <Switch>
      <AuthRoute path='/' exact component={Splash}/>
      <ProtectedRoute path='/h' component={HomeContainer}/>
      <Route path='/error' component={ErrorPage}/>
    </Switch>
  </div>
    
 
);

export default App;
