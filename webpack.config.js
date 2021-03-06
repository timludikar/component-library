var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './dist',
    libraryTarget: 'umd',
  },
  stylus: {
    use: [require('rupture')(), require('jeet')()]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!stylus-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: false }),
  ]
}
