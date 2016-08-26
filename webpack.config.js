'use strict'

var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  module: {
    loaders: [

      {
        test: /\.s?css$/,
        loader: 'style!css!postcss!sass'
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
  ]
}