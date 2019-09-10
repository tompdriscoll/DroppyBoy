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
import Grid4 from './grid4/grid4'
import Grid5 from  './grid5/grid5'
import Grid6 from './grid6/grid6'


document.addEventListener( 'scroll', () => {
  var drawer = document.getElementById('drawer');  
  if (drawer) {
    if (window.scrollY >= 500) {
        drawer.classList.add('closed')
        drawer.classList.remove('drawer')
    }
    else {
      drawer.classList.add('drawer')
      drawer.classList.remove('closed')
    }    
  }
})

const Splash = () => (

    <div id='splash'>
        <div id='nav1'>
          <Nav/>                          
        </div>
        <Grid/>  
        <Grid2 />
        <Grid3/>
        <Grid4/>
        <Grid5/>
        <Grid6/>
        <Drawer/>                      
    </div>

);

export default Splash;