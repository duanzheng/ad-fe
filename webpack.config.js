var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass?sourceMap=true&sourceMapContents=true';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            loaders: ['react-hot-loader', 'babel-loader'],
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            loader: sassLoader
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules/antd/lib')
            ],
            loader: 'style-loader!css-loader'
        }],
    },
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
};
