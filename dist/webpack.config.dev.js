"use strict";

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var TerserWebpackPlugin = require('terser-webpack-plugin');

var CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js'
  },
  plugins: [new MiniCssExtractPlugin(), new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin(), new HTMLWebpackPlugin({
    template: "src/index.pug",
    filename: "index.html",
    title: "development"
  })],
  devServer: {
    // contentBase: 'src',
    port: 3001 // stats: {
    //     children: false,
    //     maxModules: 0
    // }

  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
  },
  module: {
    rules: [{
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: true
        }
      }, 'css-loader'],
      test: /\.css$/
    } //         {
    //             test:/\.pug$/,
    //             use: 'pug-loader'
    //         },
    //         {
    //             test: /\.ts$/,
    //             use: 'ts-loader',
    //             exclude: /node_modules/,
    //         },
    //         {
    //             test: /\.js$/,
    //             exclude: '/node_modules/',
    //             use: 'eslint-loader'
    //         }
    ]
  }
};
//# sourceMappingURL=webpack.config.dev.js.map
