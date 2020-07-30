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
import Nav3 from './nav3/nav3'
import Nav4 from './nav4/nav4'
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

  var nav1 = document.getElementById('nav1');  
  var nav2 = document.getElementById('nav2');  
  var nav3 = document.getElementById('nav3');  
  let offsetTop1 = (document.getElementById('grid3').offsetTop)
  let offsetTop2 = (document.getElementById('grid4').offsetTop)
  let offsetTop3 = (document.getElementById('grid5').offsetTop)

  if (nav1) {
    if (window.scrollY <= offsetTop1) {
      let height = 96
      if (height >= 0) nav1.style.height = `${height}` + 'px'
    }
    else if (window.scrollY >= (offsetTop1)){
      nav1.style.height = '0px'
    }
    if (window.scrollY >= (offsetTop1 - 96)){
      let height = ((offsetTop1) - window.scrollY)
      nav1.style.height =  `${height}` + 'px'
    }
  }

  if (nav2) {
    if (window.scrollY <= offsetTop2) {
      let height = 96
      if (height >= 0) nav2.style.height = `${height}` + 'px'
    }
    else if (window.scrollY >= (offsetTop2)){
      nav2.style.height = '0px'
    }
    if (window.scrollY >= (offsetTop2 - 96)){
      let height = ((offsetTop2) - window.scrollY)
      nav2.style.height =  `${height}` + 'px'
    }
  }

  if (nav3) {
    if (window.scrollY <= offsetTop3) {
      let height = 96
      if (height >= 0) nav3.style.height = `${height}` + 'px'
    }
    else if (window.scrollY >= (offsetTop3)){
      nav3.style.height = '0px'
    }
    if (window.scrollY >= (offsetTop3 - 96)){
      let height = ((offsetTop3) - window.scrollY)
      nav3.style.height =  `${height}` + 'px'
    }
  }
})



const Splash = () => (

    <div id='splash'>
        <div id='nav1' className='nav'>
          <Nav/>                          
        </div>
        <div id='nav2' className='nav'>
          <Nav2/>
        </div>
        <div id='nav3' className='nav'>
          <Nav3/>
        </div>
        <div id='nav4' className='nav'>
          <Nav4/>
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