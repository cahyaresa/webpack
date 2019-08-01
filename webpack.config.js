const path = require("path");
const HtmlWebPlugins = require('html-webpack-plugin');

module.exports = {
 entry: "./src/index.js",
 mode: "development",
 output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
 },
 plugins: [
    new HtmlWebPlugins({
      template: "./src/template.html",

   })
 ],
 module: {
    rules: [
       {
          test: /\.scss$/,
          use: [
             "style-loader", // 3. inject the css into DOM 
             "css-loader",  // 2. convert the css to js(commonjs) file
             "sass-loader" // 1. turn sass into css 
            ]
         }
    ]
 }
};