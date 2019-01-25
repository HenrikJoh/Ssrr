import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import fetch from 'isomorphic-fetch';
import App from '../App';
import gallery from '../store/reducer';

const app = express();
const port = '1337';

app.use(express.static('public'));

app.use(loadApp);

const dbUrl = 'http://localhost:3000/pictures';

function getPictures() {
  fetch(dbUrl)
    .then(data => data.json())
    .then(result => {
      console.log(result[0].id);
    })
    .catch(err => console.log(err));
}

function loadApp(req, res) {
  getPictures();
  const store = createStore(gallery);
  const app = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const newState = store.getState();
  console.log(newState);
  res.send(renderHtml(app, newState));
}

function renderHtml(app, newState) {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${app}</div>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
              newState
            )}</script>
            <script src="./bundle.js"></script>
        </body>
        </html>`;
}
app.listen(port, () => {
  console.log('listening to 1337');
});
