const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ['url-loader'],
      },
    ]
  },
  resolve: { extensions: ["*", ".tsx", ".ts", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    host: "0.0.0.0",
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
