const path = require('path');

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
          ]
        }
      },
      {
          test: /\.scss$/,
          use: [{
            loader: "style-loader"
          },
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
          }]
        }
    ]
  }
}
