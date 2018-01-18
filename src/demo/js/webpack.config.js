// Requirements
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");

var config = {
    context: path.join(__dirname),
    entry: {
        vendor: [
            "react",
            "react-dom",
        ],
        app: [
            "./index.tsx",
        ]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/../static/",
        publicPath: "",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [
            "../../../node_modules",
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                enforce: "pre",
                loader: "source-map-loader",
                test: /\.js$/,
            },
            {
                enforce: "pre",
                exclude: [/(node_modules)/, /(\.spec\.tsx?)/],
                loader: "tslint-loader",
                options: { configFile: "../../../tslint.json" },
                test: /\.tsx?$/,
            },
            {
                test: /\.ts(x?)$/,
                use: {
                    loader: "ts-loader",
                    options: { configFile: "./tsconfig.json" },
                },
            },
            // Styling should be last so we can easily replace them for production.
            {
                test: /\.(scss|sass|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { minimize: true } },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () { return [autoprefixer] },
                                sourceMap: true,
                            },
                        },
                        "resolve-url-loader",
                        { loader: "sass-loader", options: { sourceMap: true } },
                    ]
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|svg)/,
                loader: "file-loader?publicPath=" + "/"
            },
            {
                test: /\.txt$/,
                use: "raw-loader"
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("app.css"),
    ],
};

module.exports = config;
