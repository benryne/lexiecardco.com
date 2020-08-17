// Webpack uses this to work with directories
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const bootstrap = require('bootstrap');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  entry: './src/js/app.js',
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'site'),
    filename: 'app.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
        },
        {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/about.html',
      filename: 'about/index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/newsletter.html',
      filename: 'newsletter/index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/non-profits.html',
      filename: 'non-profits/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  mode: 'development'
};