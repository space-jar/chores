const path = require('path');

const config = {
    mode: 'development',
    entry: [
        './src/main.js',
        './src/scss/style.scss'
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[name].css' }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};

module.exports = config;