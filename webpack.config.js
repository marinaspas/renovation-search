const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
   filename: "bundle.js",
   path: path.resolve(__dirname, 'build'),
  }, 
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}