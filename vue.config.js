const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'To-Do PWA',
    themeColor: '#4a90e2',
    msTileColor: '#ffffff',
    manifestOptions: {
      background_color: '#ffffff'
    },
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://'),
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/your-repo-name/' // Replace 'your-repo-name' with the actual repo name
    : '/'
})
