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
import HeroAside from './grid/hero_aside'
import Drawer from '../drawer/drawer'

const Splash = () => (

    <div id="component1819192764109869114">
        <main class="IndexRebrandPage AtlasGrotesk-Regular-Web ob-type">
            <section class="RebrandHero ob-grid">
                <section class="RebrandNavigation RebrandNavigation-theme__burgundy-aqua" aria-hidden="false">
                    <Nav/>
                </section>
                <section class="RebrandHero-container ob-grid-container">
                    <HeroAside/>
                </section>
            </section>
            <section class="RebrandCreation ob-grid">
                
            </section>     
        </main>
    </div>

);

export default Splash;