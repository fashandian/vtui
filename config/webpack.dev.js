const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const globalVarsLess = require('../globalVarsOfLess');
console.log(__dirname)

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: '/example/src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                // suport css import less, so css suffix also passes through the following loader
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                globalVars: {
                                    ...globalVarsLess
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        static: [path.resolve(__dirname, '../example/public'), path.resolve(__dirname, '../dist')],
        port: 8080,
        host: 'localhost'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../example/public/index.html'),
            filename: 'index.html',
            chunks: ['index']
        })
    ]
}