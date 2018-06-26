module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8000,
    proxy: {
      '/api': {
        target: {
          host: '0.0.0.0',
          protocol: 'http',
          port: 3000
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
