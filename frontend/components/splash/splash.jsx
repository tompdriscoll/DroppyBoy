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
import Nav2 from './nav2/nav2'
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
document.addEventListener( 'scroll', () => {
  var drawer = document.getElementById('nav1');  
  if (drawer) {
    if (window.scrollY < 1590) {
      let height = 96
      if (height >= 0) drawer.style.height = `${height}` + 'px'
    }
    else if (window.scrollY >= 1728){
      drawer.style.height = '0px'
    }
    else if (window.scrollY >= 1590) {
      let height = (1726 - window.scrollY)
      if (height >= 0) drawer.style.height = `${height}` + 'px'
    }
  }
})


const Splash = () => (

    <div id='splash'>
        <div id='nav1'>
          <Nav/>                          
        </div>
        <div id='nav2'>
          <Nav2/>
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