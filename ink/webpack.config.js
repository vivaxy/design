/**
 * @since 2017-06-08 11:08:13
 * @author vivaxy
 */

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
