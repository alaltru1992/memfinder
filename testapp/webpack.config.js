const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development';

const filename = txt => isDev ? `[name].${txt}` : `name.[contenthash].${txt}`

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    output: {
        filename: `./${filename('js')}`,
        path: path.resolve(__dirname, 'app')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "index.html",
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: `./${filename('css')}`,
        })
    ],
    module:{
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:png|jpe?g|gif|jpg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: `.img/${filename(['ext'])}`,
                },
            },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'app'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
    }

}