const webpack = require('webpack');

// Paths
const path = require('path');
const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, "dist");
const NODE_MODULES = path.resolve(__dirname, 'node_modules');

// Production
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

// Pick mode
const isProd = process.env.NODE_ENV === "production";

var sassDev = [{
    loader: "style-loader"
}, {
    loader: "css-loader"
}, {
    loader: "sass-loader"
}];
var sassProd = extractSass.extract({
    use: [{
        loader: "css-loader"
    }, {
        loader: "sass-loader"
    }],
    // use style-loader in development
    fallback: 'style-loader'
});

var sassConfig = isProd ? sassProd : sassDev;

// Final Config
module.exports = {
    entry: path.join(SRC, 'index.tsx'),
    output: {
        path: DIST,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "awesome-typescript-loader"
            }]
        }, {
            test: /\.jsx?$/,
            exclude: [NODE_MODULES],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["es2015", { "modules": false }],
                        // webpack understands the native import syntax, and uses it for tree shaking

                        "react"
                        // Transpile React components to JavaScript
                    ],
                    "plugins": [
                        "react-hot-loader/babel"
                        // Enables React code to work with HMR.
                    ]
                }
            }]
        }, { // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            test: /\.json$/,
            use: [{
                loader: 'json-loader'
            }]
        }, {
            test: /\.scss$/,
            use: sassConfig
        }]
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
    resolve: {
        modules: [
            SRC,
            NODE_MODULES
        ],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: 'errors-only',
        open: true,
        hot: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
};