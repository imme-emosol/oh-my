const baseConfig = require('./webpack.config.shared.js');
const merge = require('webpack-merge');
const StyleExtractionPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseConfig, {
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    StyleExtractionPlugin.loader,
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
    plugins: merge(baseConfig.plugins, [
        new StyleExtractionPlugin({
            filename: './distributable/styles/[name].css',
            chunkFileName: './distributable/styles/[id].css',
        }),
    ]),
});
