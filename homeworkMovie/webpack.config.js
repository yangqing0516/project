const webpack = require('webpack');
let HMR = webpack.HotModuleReplacementPlugin; //其服务自动打开浏览器
module.exports = {
     entry: './main.js',
     output: {
        filename:'bundle.js',
        // filename: '[name].[chunkhash:6].js' name变量和chunkhash变量来指定入口的输出
        path:__dirname + '/dist'
     },
     module: {
         rules:[
            {
                test: /\.js$/,
                use:'babel-loader' // 需要依赖一个包,.babelrc
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader'] 
            },
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|woff|svg|eot|ttf)$/,
                use: ['url-loader']
            }
         ]
    },
     plugins: [
         new HMR()
     ],
     devServer: {
        open: true,
        inline: true,
        hot: true
     }
}