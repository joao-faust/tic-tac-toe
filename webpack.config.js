const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'none',
  entry: './src/interface.js', 
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 5000
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'assets/js/bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: 'src/views/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css',
    }),
  ],
  devtool: 'source-map'
};
