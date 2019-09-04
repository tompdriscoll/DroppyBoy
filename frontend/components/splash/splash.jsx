import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Nav from './nav/nav'
import Hero from './grid/hero_aside'
import Drawer from '../drawer/drawer'

const Splash = () => (

    <div id='splash'>
        <Nav/>                          
        <Hero/>                        
    </div>

);

export default Splash;