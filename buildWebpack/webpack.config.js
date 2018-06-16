const path = require("path");
const webpack = require('webpack');
// 打包html
const htmlWebpackPlugin = require("html-webpack-plugin");
// 分离css
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
// 友好的报错插件
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// 加载vue文件的
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 起服务是webpack显示百分比
const BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");
// 热更新
const HMR = webpack.HotModuleReplacementPlugin;
module.exports = {
  // 配置环境
  mode: "development",
  // 入口文件
  entry: path.join(__dirname, "./src/main.js"),
  // 输出文件
  output: {
    path: path.join(__dirname, "build/assets"),
    filename: "bundle.js",
    // 设置静态资源公共路径
    publicPath: '/assets'
  },
  module: {
    // loader加载器
    rules: [{
        test: /\.(htm|html)/,
        use: ["raw-loader"]
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //匹配不希望处理文件的路径
        use: ["babel-loader"]
      },
      // 分离css文件配置
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|woff|eot|ttf|svg)$/,
        use: ["url-loader"]
      }
    ]
  },
  // 配置模块如何解析
  resolve: {
    // 模块别名定义,方便后续直接引用别名,无须多写长长的地址
    alias: {
      // 可以省略不写
      "vue$": "vue/dist/vue.esm.js"
    },
    // 自动解析确定的扩展
    extensions: ['.vue', '.json', '.js']
  },
  // 起服务
  devServer: {
    // 客户端标志等级
    clientLogLevel: 'warning',
    // 设置服务器的主机号
    host: "localhost",
    // 端口号
    port: 8080,
    // 它指定服务器的根路径,如果不写contentBase的值,那么contentBase默认是项目的目录
    contentBase: './build',
    // 这个配置属性是用来应对返回404页面时定向到特定页面应用的
    historyApiFallback: {
      rewrites: [{
        from: /./,
        to: '/404.html'
      }]
    },
    // 用来在编译出错的时候,在浏览器上显示错误,默认false,可以设置为true
    overlay: true,
    // 自动打开浏览器
    open: true,
    // 热更新
    hot: true,
    // 用来控制编译的时候shell上输出内容,errors-only表示只打印错误
    stats: "errors-only",
    // 设置为true时,控制台只输出第一次编译的信息,报讯以后再次编译的时候不会输出任何内容,包括错误和警告,false为默认值
    quiet: true,
    // 设置接口，请求数据
    before(app) {
      app.get('/api', (req, res) => {
        const data = require('./src/common/data/data.json');
        res.json(data)
      })
    }
  },
  plugins: [
    // 热更新
    new HMR(),
    // 加载vue问价
    new VueLoaderPlugin(),
    // 友好的提示错误
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // 显示成功信息
        messages: ["You application is running here http://localhost:8080"]
      }
    }),
    // 显示百分比
    new BitBarWebpackProgressPlugin(),
    // 分离cdd
    new ExtractTextWebpackPlugin('newStyle.css'),
    // 大伯html文件
    new htmlWebpackPlugin({
      title: '重新生成的页面',
      // 生成新的html打包文件
      filename: '../index.html',
      // 模板问价
      template: './index.html',
      // script标签在什么位置显示,head,body,true,false四个不同的位置,head,body是字符串的形式
      inject: true
    })
  ],
  // 提示错误
  devtool: "eval-source-map"
};