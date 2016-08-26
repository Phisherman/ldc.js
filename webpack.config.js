'use strict'

var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: './index.js',
  output: {
    path: './bundle',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [

      {
        test: /\.s?css$/,
        loader: extractCSS.extract(['css', 'postcss', 'sass'])
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bundle.min.js)/,
        loaders: [
          'babel?presets[]=es2015,presets[]=react'
        ]
      }, {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'html'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  postcss: [
    autoprefixer()
  ],
  plugins: [
    extractCSS
  ]
}