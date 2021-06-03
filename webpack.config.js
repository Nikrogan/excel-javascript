const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const fileName = (ext) => {
  return isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
}

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-typescript"]
      },
    }
  ]
  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  entry: ['./main.ts'],
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json", ".scss"],
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@core": path.resolve(__dirname, "src")
    }

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./main.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css')
    })
  ],
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 3000,
    hot: isDev
  },
};
