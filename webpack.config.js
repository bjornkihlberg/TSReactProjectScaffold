const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [{
                    loader: 'tslint-loader',
                    options: { emitErrors: true, typeCheck: true }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './output/')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}