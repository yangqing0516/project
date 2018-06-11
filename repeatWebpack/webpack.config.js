const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HMR = webpack.HotModuleReplacementPlugin;
const plugins = [
	// 热替换
	new HMR(),
	// 引入vue插件
	new VueLoaderPlugin(),
	// 从页面中抽离css
	new MiniCssExtractPlugin({
		filename: "[name].[contenthash:6].css"
	}),
	//处理html，并自动引用output的文件
	new HtmlWebpackPlugin({
		//目标文件
		filename: "../index.html",
		//模版文件
		template: "./src/index.html",
		//对文件进行压缩
		minify: {
			//压缩代码
			minimize: true,
			//移除注释
			removeComments: true,
			//去掉空格
			collapseWhitespace: true,
			//压缩行内css
			minifyCSS: true,
			//压缩行内js
			minifyJS: false
		}
	})
	// new CleanWebpackPlugin(["build/assets/"]) // 删除bundle.js所在的文件
];
module.exports = {
	mode: "development", // 区分是在什么开发环境下,只有在webpack4版本的环境下才有效果
	entry: {
		index: "./src/js/main.js",
		vendors: ["jquery"]
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./build/assets/"),
		publicPath: "assets/"
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader"]
			},
			{
				// 图片  依赖file-loader
				test: /\.(gif|png|jpe?g|svg)/i,
				use: ["url-loader"]
			},
			{
				// icon
				test: /\.(eot|svg|ttf|woff)$/,
				use: ["url-loader"]
			},
			{
				// scss
				test: /\.(scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	// 指明报错的位置
	devtool: "eval-source-map",
	devServer: {
		// 直接打开的是html文件,不用选择
		contentBase: "./build",
		// 自动打开浏览器
		open: true,
		// 设置端口号
		port: 9090,
		//启用gzip压缩文件
		compress: true,
		//强制页面访问index.html
		historyApiFallback: true,
		//实时刷新
		inline: true,
		//支持模块热更新
		hot: true,
		before: function(app) {
			app.get("/items/list", (req, res) => {
				var data = fs.readFileSync(
					path.join(__dirname, "./src/data/data.json"), "utf-8");
				res.json(data);
			});
		}
	},
	plugins,
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors"
				}
			}
		}
	}
};