/**
 * @since 2017-06-08 11:02:18
 * @author vivaxy
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
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
