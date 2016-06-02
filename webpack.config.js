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
    resolve: {
        //查找module的话从这里开始查找
        root: '/home/paul/www/myAntd/node_modules/antd', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            antdcss : 'dist/antd.css'
        }
    }
};