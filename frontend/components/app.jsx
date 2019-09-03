import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBar from './nav/nav_bar'

const App = () => (
  <div>
    <header>
        <NavBar />
    </header>
  </div>
);

export default App;
