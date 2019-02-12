import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import gallery from '../store/reducer';
import App from '../App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  gallery,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);

console.log('preloaded', preloadedState);
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
