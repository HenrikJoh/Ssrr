import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';

const app = express();
const port = '1337';

app.use(express.static('public'));

app.use(loadApp);

function loadApp(req, res) {
  const app = renderToString(<App />);

  res.send(renderHtml(app));
}

function renderHtml(html) {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="./bundle.js"></script>
        </body>
        </html>`;
}
console.log('listening');
app.listen(port, () => {
  console.log('listening to 1337');
});
