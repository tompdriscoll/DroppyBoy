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
import Grid from './grid/hero_aside'
import Drawer from './drawer/drawer'
import Grid2 from './grid2/grid2'
import Grid3 from './grid3/grid3'
const Splash = () => (

    <div id='splash'>
        <Nav/>                          
        <Grid/>  
        <Grid2 />
        <Grid3/>
        <Drawer/>                      
    </div>

);

export default Splash;