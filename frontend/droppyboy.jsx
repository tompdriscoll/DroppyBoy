//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import {signup } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup
    // TESTING END
  const root = document.getElementById('root');
  ReactDOM.render(<Root store ={store}/>, root);
});
