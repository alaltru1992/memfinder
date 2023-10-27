import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {buildOptions} from "./types/config";
import miniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(options: buildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new miniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        })
    ]
}