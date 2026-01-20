import type { UserConfigExport } from '@tarojs/cli'

export default {
  projectName: 'time-manage',
  date: '2026-01-20',
  designWidth: 375,
  deviceRatio: {
    375: 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  framework: 'react',
  compiler: 'webpack5',
  cache: { enable: true },
  mini: {
    postcss: {
      pxtransform: { enable: true },
      url: { enable: true, config: { limit: 1024 } }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static'
  }
} satisfies UserConfigExport

