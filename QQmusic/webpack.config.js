const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
let resolve = (url) => {
    return path.resolve(__dirname, url)
}
module.exports = {
    mode: 'development',
    entry: resolve('./src/main.js'),
    output: {
        path: resolve('./dist'),
        filename: 'static/[name].js'
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js",
            "@": resolve('./src')
        },
        extensions: [".vue", ".js"]
    },
    module: {
        rules: [{
            test: /\.js/,
            loader: 'babel-loader'
        }, {
            test: /\.css/,
            loader: ['style-loader', 'vue-style-loader', 'css-loader']
        }, {
            test: /\.scss/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.jpg|png|gif|jpeg|woff|woff2|svg|eot|ttf/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack',
            template: './index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: resolve('./src'),
        host: 'localhost',
        port: 8080,
        open: true
    }
}