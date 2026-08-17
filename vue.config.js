const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081', //你的springboot地址端口
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}