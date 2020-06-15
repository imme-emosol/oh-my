const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './sources/index.ts',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'distributable'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            file: './distributable/index.html',
            template: './sources/index.xhtml',
            title: 'Title from shared build config',
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.scss',
            '.ts',
        ],
    },
};
