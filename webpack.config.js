var webpack = require('webpack');
var ETP = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    plugins: [
        new ETP('style.css'),
        commonsPlugin
    ],
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/',
        publicPath: "/assets/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            { test: /\.css$/, loader: ETP.extract('style-loader', 'css-loader', 'less-loader') }
        ]
    }
};