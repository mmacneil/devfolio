const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /.s?css$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }]
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserJSPlugin({})
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css'
    }),
  ]
};