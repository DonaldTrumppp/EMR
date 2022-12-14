const path = require('path');
let webpack = require("webpack");


module.exports = {
  // The entry point file described above
  entry: './src/index.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader?cacheDirectory=true',
        }
    }]
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'source-map',
};