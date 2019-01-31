import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import gallery from '../store/reducer';
import App from '../App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(gallery, preloadedState, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
