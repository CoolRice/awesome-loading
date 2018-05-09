const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractSass = new ExtractTextPlugin({
    filename: 'main.css',
});
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
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
            ['env', {"targets": { "browsers": ['> 5%']}}]
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
