// This is the development version of the react config. It uses the test/index.tsx as entrypoint. 
// Production has antoher setup and is defined in webpack.config.js 

// In production react should be externalized and the entrypoint is index.js

// Requirements
var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var package = require(path.join(__dirname, "/package.json"));
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProduction = (JSON.stringify(process.env.NODE_ENV || "development") === "production");

var config = {
    context: path.join(__dirname),
    entry: {
        vendor: [
            "webpack/hot/dev-server",
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.join(__dirname, "./src/base"),
            'node_modules',
        ]
    },
    devtool: "source-map",
    devServer: {
        stats: "minimal"
    },
    module: {
        rules: [
            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                enforce: "pre",
                loader: "source-map-loader",
                test: /\.js$/,
            },
            {
                enforce: 'pre',
                exclude: [/(node_modules)/, /(\.spec\.tsx?)/],
                loader: 'tslint-loader',
                test: /\.tsx?$/,
                options: { configFile: "tslint.json" }
            },
            {
                exclude: [/__tests__/],
                test: /\.ts(x?)$/,
                use: ["ts-loader"],
            },
            // Styling should be last so we can easily replace them for production.
            {
                test: /\.(scss|sass|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: isProduction } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () { return [autoprefixer] },
                                sourceMap: !isProduction,
                            },
                        },
                        'resolve-url-loader',
                        { loader: 'sass-loader', options: { sourceMap: !isProduction } },
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|svg)/,
                loader: "file-loader"
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("style.css"),
        // Define the environment variables
        new webpack.DefinePlugin({
            "Config": {
                "production": isProduction,
                "version": JSON.stringify(package.version),
            },
        }),
    ],
};

module.exports = config;
