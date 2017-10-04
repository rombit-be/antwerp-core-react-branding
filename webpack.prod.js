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

// config.externals = {
//     react: "react",
//     reactDom: "react-dom",
//     moment: "moment",
// };

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

// Doesn't work as intended
// config.plugins.push(new DtsBundlePlugin());

// Taken from: https://medium.com/@vladimirtolstikov/how-to-merge-d-ts-typings-with-dts-bundle-and-webpack-e8903d699576
function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        var dts = require('dts-bundle');

        dts.bundle({
            name: libraryName,
            main: './dist/lib/index.d.ts',
            out: '../index.d.ts',
            removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
};


module.exports = config;

