const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../dst');
const APP_DIR = path.resolve(__dirname, './');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './index.js',
        output: {
            path: BUILD_DIR,
            filename: '[name].[fullhash:8].js',
            sourceMapFilename: '[name].[fullhash:8].map',
            chunkFilename: '[id].[fullhash:8].js',
        },
        performance: {
            hints: isProduction ? 'warning' : false,
        },
        target: isProduction ? 'browserslist' : 'web',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                    include: APP_DIR,
                    exclude: /node_modules/,
                },
                {
                    test: /\.js?$/,
                    loader: 'eslint-loader',
                    include: APP_DIR,
                },
                {
                    test: /\.png$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '/images/[name].[ext]',
                        },
                    }],
                },
                {
                    test: /\.jpg$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]',
                        },
                    }],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.txt$/,
                    loader: 'raw-loader',
                },
            ],
        },
        resolve: {
            modules: [
                path.resolve(__dirname),
                path.resolve(__dirname, 'node_modules'),
            ],
        },
        devServer: {
            historyApiFallback: true,
            disableHostCheck: true,
            hot: true,
            contentBase: '../dst',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                title: 'Andrii Prashcharuk | Image-Free Website',
                description: 'My name is Andrii Prashcharuk and this is my personal website! I’m a Professional Software Engineer from Ukraine with more than 9 years of experience in Front-End development.',
                keywords: 'Prashcharuk, Andrii Prashcharuk, front-end, developer, engineer, react, redux, html5, css3, css3 animation, flow, image-free website',
                url: 'https://prashchar.uk',
                image: 'https://prashchar.uk/profile_image.jpg',
                imageType: 'image/jpeg',
                imageWidth: '256',
                imageHeight: '256',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './static',
                        to: '../dst',
                    },
                ],
            }),
            new CompressionPlugin(),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
};
