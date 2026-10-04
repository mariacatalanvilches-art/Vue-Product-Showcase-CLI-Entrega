module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      args[0].patterns[0].globOptions = {
        ...args[0].patterns[0].globOptions,
        ignore: ['**/index.html']
      }
      return args
    })
  }
}
