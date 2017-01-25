module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './dist',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  }
}
