import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import App from '../App';
import gallery from '../store/reducer';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import routes from '../components/routes';

const app = express();
const port = '1337';

app.use(express.static('public'));

app.use(loadApp);

function loadApp(req, res) {
  console.log(req.url);
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = currentRoute.getInitialData
    ? currentRoute.getInitialData(req.url)
    : Promise.resolve();

  promise.then(pictures => {
    let context = {};
    const store = createStore(gallery, { pictures });
    const app = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );
    const newState = store.getState();
    res.send(renderHtml(app, newState));
  });
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
            <script src="/bundle.js"></script>
        </body>
        </html>`;
}
app.listen(port, () => {
  console.log('listening to 1337');
});
