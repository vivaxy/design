/**
 * @since 2017-06-08 11:20:08
 * @author vivaxy
 */

module.exports = {
  entry: {
    index: './src/index.js',
    worker: './src/worker.js',
  },
  output: {
    filename: '[name].js',
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
