const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: {
        admin: [
            "webpack-hot-middleware/client",
            path.resolve(__dirname, "src/admin.js")
        ],
        shoppage: [
            "webpack-hot-middleware/client",
            path.resolve(__dirname, "src/shoppage.js")
        ]
    },
    output: {
        path: path.resolve(__dirname, "src"),
        // filename: "admin.js",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                WEBPACK: true
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["react-hmre"]
                    }
                },
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [require("autoprefixer")];
                            }
                        }
                    }
                ],
                include: path.resolve(__dirname, "src")
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
