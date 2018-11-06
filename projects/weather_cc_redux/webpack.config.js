module.exports = {
  // https://webpack.js.org/configuration/ for reference
  mode:"development",
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
