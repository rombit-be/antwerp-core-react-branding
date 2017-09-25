// This is the development version of the react config. It uses the test/index.tsx as entrypoint. 
// Production has antoher setup and is defined in webpack.config.js 

// In production react should be externalized and the entrypoint is index.js

// Requirements
var path = require("path");
var webpack = require("webpack");
var package = require(path.join(__dirname, "/package.json"));

var config = {
    context: path.join(__dirname),
    entry: {
        vendor: [
            "webpack/hot/dev-server",
            "webpack-hot-middleware/client",
            "react",
            "react-dom",
        ],
        app: [
            "./src/test/index.tsx",
        ]
    },
    output: {
        filename: "[name].js",
        hotUpdateChunkFilename: "[id].[hash].hot-update.js",
        hotUpdateMainFilename: "[hash].hot-update.json",
        path: __dirname + "/dist/",
        publicPath: "/dist/",
    },
    devtool: "source-map",
    module: {
        rules: [
            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre",
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /(node_modules)/,
            },
            // All files with a ".ts" or ".tsx" extension will be handled by "ts-loader".
            // Note that babel-loader is configured to run after ts-loader
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|svg)/,
                loader: "file-loader?name=../images/[name].[ext]"
            },
            {
                test: /\.ts(x?)$/,
                use: ["ts-loader"],
                exclude: /__tests__/
            },
            // Styling should be last so we can easily replace them for production.
            {
                test: /\.css$/,
                loader: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/,
                loader: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } }
                ]
            },
        ],
    },
};

module.exports = config;