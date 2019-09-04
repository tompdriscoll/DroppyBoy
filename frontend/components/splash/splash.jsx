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
        <main className="IndexRebrandPage AtlasGrotesk-Regular-Web ob-type">
            <section className="RebrandHero ob-grid">
                <section className="RebrandNavigation RebrandNavigation-theme__burgundy-aqua" aria-hidden="false">
                    <Nav/>
                </section>
                <section className="RebrandHero-container ob-grid-container">
                    <HeroAside/>
                </section>
            </section>
            <section className="RebrandCreation ob-grid">
                
            </section>     
        </main>
    </div>

);

export default Splash;