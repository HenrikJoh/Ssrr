const path = require('path');

const browserConfig = {
  entry: {
    browser: 'src/browser/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};

const serverConfig = {
  entry: {
    server: 'src/server/server.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};

export default { browserConfig, serverConfig };
