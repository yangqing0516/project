import { webSocket } from 'rxjs/observable/dom/webSocket';

let path = require('path');
console.log(webSocket);
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        filename: 'bundle.js', // 自定义的
        path: path.resolve(__dirname)
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|woff|svg|eot|ttf)$/,
                use: ['url-loader']
            }
        ]
    }
}