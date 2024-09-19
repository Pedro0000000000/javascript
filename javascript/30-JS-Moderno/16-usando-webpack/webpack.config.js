const MiniCssExtractPluglin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPluglin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPluglin()],
};
