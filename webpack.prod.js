// Import the dev settings
var webpack = require("webpack");
var config = require("./webpack.config.js");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var isProduction = true;
var libraryName = "Antwerp-Core-React-Branding";

// Set the entry point to the library
config.entry = {
    index: [
        "./src/lib/index.tsx",
    ]
};

config.target = "web";

config.output = {
    filename: "index.js",
    path: __dirname + "/dist/",
    library: libraryName,
    libraryTarget: "umd",
};

config.module.rules[2].exclude.push(/(test)/);


// Slice the hot module replacement
config.plugins = config.plugins.slice(2);

// Minify the code
config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));

// Copy the styles
config.plugins.push(new CopyWebpackPlugin([{
    from: "./src/base/src/styles",
    to: "./styles",
}]));

module.exports = config;

