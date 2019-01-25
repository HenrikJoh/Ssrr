import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import gallery from '../store/reducer';
import App from '../App';
import thunk from 'redux-thunk';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(gallery, preloadedState, applyMiddleware(thunk));
console.log('as', preloadedState);
hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
