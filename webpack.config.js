const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './components/Todo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'todo_bundle.js'
  },
  module: {
    rules: [
      {include:path.resolve(__dirname, 'components'), test: /\.(js)$/, use: 'babel-loader'},
      {test:/\.(css)$/, use: ['css-loader', 'style-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template:'index.html'})
  ]
}

module.exports = config;
