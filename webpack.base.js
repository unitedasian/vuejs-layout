module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loaders: ['vue-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}
