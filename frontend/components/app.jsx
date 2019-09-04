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
import Drawer from './drawer/drawer'
const App = () => (
  <div id="embedded-app" class="embedded-app IndexRebrandPage">
    <Splash/> 
    <Drawer/>  
  </div>
    
 
);

export default App;
