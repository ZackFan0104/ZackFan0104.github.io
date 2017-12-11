var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
      main: ['babel-polyfill', './main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015',{
                    modules: false
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: 2
  })]
};
