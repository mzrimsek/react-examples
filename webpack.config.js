var path = require("path");

module.exports = {
  entry: [
    path.resolve(__dirname, "src/index.js")
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [{
      test: /\.js/,
      include: [path.resolve(__dirname, "src")],
      loader: "babel"
    }]
  },
  resolve: {
    root: path.resolve(__dirname, "src")
  }
};
