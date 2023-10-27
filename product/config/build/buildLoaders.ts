import webpack from "webpack";
import miniCssExtractPlugin from 'mini-css-extract-plugin'
import {buildOptions} from "./types/config";

export function buildLoaders(options:buildOptions): webpack.RuleSetRule[]{
    const {isDev} = options;

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : miniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options:{
                    modules: {
                        auto : (path: string) => path.includes('.module.'),
                        localIdentName: isDev ? "[local]__[hash:base64:5]" : "[hash:base64:5]",
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    return [
        tsLoaders,
        cssLoaders
    ]
}