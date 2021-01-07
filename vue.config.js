const path = require('path'),
  CompressionPlugin = require('compression-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  pages: {
    index: 'src/pages/main.js',
    mobile: {
      entry: 'src/pages/mobile/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html',
      chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    },
    pc: {
      entry: 'src/pages/pc/main.js',
      template: 'public/pc.html',
      filename: 'pc.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pc']
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/crossDomain': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/crossDomain': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'));
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.module
    .rule('svg')
    .exclude.add(resolve('src/svglines'))
    .end();

    config.module
    .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include.add(resolve('src/svglines'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'svglines-[name]'
    });
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}