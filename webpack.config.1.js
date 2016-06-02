var webpack = require('webpack');
var ETP = require('extract-text-webpack-plugin');

module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: ETP.extract('style-loader', 'css-loader', 'less-loader') }
        ]
    },
    plugins: [
        new ETP('style.css')
    ]
};