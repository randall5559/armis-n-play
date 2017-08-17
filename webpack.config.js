/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: [".js", ".json", ".css", ".scss"]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015']}},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015']} },
            { test: /\.css$/, loader: "css-loader" },
            { test: /\.scss$/, use:
                [
                    {   loader: "style-loader"  },
                    {   loader: "css-loader"    },
                    {   loader: "sass-loader"   }
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}