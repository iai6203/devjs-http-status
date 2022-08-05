const path = require('path')

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'http-status.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'http-status',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
}
