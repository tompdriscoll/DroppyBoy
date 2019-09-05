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
const App = () => (
  <div id="app">
    <Route exact path='/' component={Splash}/>
    <Route path='/h' component={UserHome}/>
  </div>
    
 
);

export default App;
