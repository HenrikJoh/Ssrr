const path = require('path');

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }]
  }
};
