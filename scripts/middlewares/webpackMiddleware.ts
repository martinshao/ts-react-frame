import { Compiler } from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import devConfig from '../configs/webpack.dev'
import { HMR_PATH } from '../helpers/constants'
import WebpackHotMiddleware from 'webpack-hot-middleware'

export default function webapckMiddleware(compiler: Compiler) {
  const publicPath = devConfig.output!.publicPath! as string;
  const devMiddleOptions: webpackDevMiddleware.Options = {
    publicPath,
    stats: 'minimal',
  }

  const hotMiddlewareOptions: WebpackHotMiddleware.MiddlewareOptions = {
    path: HMR_PATH,
  }

  return [
    webpackDevMiddleware(compiler, devMiddleOptions),
    webpackHotMiddleware(compiler, hotMiddlewareOptions)
  ]
}