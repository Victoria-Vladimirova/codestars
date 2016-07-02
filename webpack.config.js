var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'bundles'),

    entry: {
        main: './main/main.js',
        task: './task/task.js'
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style',
                    'css-loader!postcss-loader!stylus-loader?{"resolve url": true}')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-template-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: 'main/main.hbs'
        }),
        new HtmlWebpackPlugin({
            filename: 'task.html',
            template: 'task/task.hbs'
        })
    ]
};
