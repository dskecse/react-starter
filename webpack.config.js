var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "eval",  // enables sourcemaps, eval is the fastest mode
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "static"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
        loaders: [    // transformers
            {
                test: /\.jsx?$/,
                loader: "babel",
                include: path.join(__dirname, "src")
            }
        ]
    }
};
