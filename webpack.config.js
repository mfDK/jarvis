module.exports = {
    entry: [
        'whatwg-fetch',
        './src/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
}
