const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry: [
            path.resolve(__dirname, './src/weatherController.js'),
            path.resolve(__dirname, './scss/main.scss'),
            path.resolve(__dirname, './image/favicon.ico')
    ],
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'css/main.min.css',
                    }
                },
                {
                    loader : 'sass-loader'
                }
            ],
          },
          {
            test: /\.ico$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'favicon.ico'
                    }
                },
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
        })
    ]
}