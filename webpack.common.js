const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'main.css',
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.js$/ ,
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            ['env', {"targets": { "browsers": ['defaults']}}]
          ],
          plugins: [
            'syntax-dynamic-import'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader", options: {
                sourceMap: true
              }
            }
          ],
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
}
