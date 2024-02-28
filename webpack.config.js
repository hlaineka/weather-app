/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const redirect = (res, loc) => {
  res.statusCode = 302;
  res.statusMessage = 'Found';
  res.headers.location = loc;
};

const DEV_API = process.env.DEV_API
  ? process.env.DEV_API
  : 'http://localhost:8080';

module.exports = {
  devServer: {
    port: 8082,
    historyApiFallback: {
      verbose: true,
    },
    proxy: {
      '/api/**': {

      },
    },
    static: {
      directory: './src',
    },
  },
  devtool: 'inline-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'static'),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: 'web',
};
