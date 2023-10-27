import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {buildOptions} from "./types/config";

export function buildDevServer({port}: buildOptions): DevServerConfiguration{
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}