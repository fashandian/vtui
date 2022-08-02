const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const filePath = (relativePath) => {
    return path.resolve(__dirname, relativePath);
}

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: filePath('/src/index.js'),
        button: filePath('/packages/button'),
        typography: filePath('/packages/typography')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    externals: [
        'vue'
    ],
    plugins: [
        new VueLoaderPlugin()
    ]
}