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
import UserHome from './home/user_home'
import ErrorPage from './error_page'
const App = () => (
  <div id="app">
    <Switch>
      <Route path='/' exact component={Splash}/>
      <Route path='/h' component={UserHome}/>
      <Route component={ErrorPage}/>
    </Switch>
  </div>
    
 
);

export default App;
