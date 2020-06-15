const baseConfig = require('./webpack.config.shared.js');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
    devServer: {
        contentBase: path.join(__dirname, 'distributable'),
        clientLogLevel: 'debug',
        hot: true,
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    mode: 'development',
//    plugins: merge(baseConfig.plugins, [
//    ]),
});
