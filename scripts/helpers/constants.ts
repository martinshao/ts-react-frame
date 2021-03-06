import path from 'path'
import { argv } from 'yargs'

const __DEV__ = process.env.NODE_ENV !== 'production'
const ENABLE_ANALYZE = !!argv.analyze;
const ENABLE_OPEN = argv.open as true | string

const HOST = '127.0.0.1'
const DEFAULT_PORT = 3000
const COPYRIGHT = `/** @preserve Powered by shaogucheng */`;

const PROJECT_ROOT = path.resolve(__dirname, '../../')
const PROJECT_NAME = path.parse(PROJECT_ROOT).name
const HMR_PATH = '/_webpack_hmr'

export {
  __DEV__,
  ENABLE_OPEN,
  ENABLE_ANALYZE,
  HOST,
  DEFAULT_PORT,
  COPYRIGHT,
  PROJECT_ROOT,
  PROJECT_NAME,
  HMR_PATH,
}