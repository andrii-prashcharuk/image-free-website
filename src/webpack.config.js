const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const PACKAGE = require('./package.json');
const version = PACKAGE.version;

const BUILD_DIR = path.resolve(__dirname, '../dst');
const APP_DIR = path.resolve(__dirname, './');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const scriptName = isProduction ? 'bundle.min.js' : 'bundle.js';

    return {
        entry: './index.js',
        output: {
            path: BUILD_DIR,
            filename: scriptName,
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                    include: APP_DIR,
                    exclude: /node_modules/,
                    options: {
                        presets: [
                            'es2015',
                            'react',
                            'stage-0',
                        ],
                    },
                },
                {
                    test: /\.js?$/,
                    loader: 'eslint-loader',
                    include: APP_DIR,
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader?limit=10000&name=/images/[name].[ext]',
                },
                {
                    test: /\.jpg$/,
                    loader: 'file-loader?&name=/images/[name].[ext]',
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
                    use: 'raw-loader',
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
            contentBase: '../dst',
            host: '0.0.0.0',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                scriptPath: `/${scriptName}?v${version}`,
                title: 'Andrii Prashcharuk | Image-Free Website',
                description: 'My name is Andrii Prashcharuk and this is my personal website! I am Professional Software Engineer from Ukraine with more than 7 years of experience in Front-End development.',
                keywords: 'Prashcharuk, Andrii Prashcharuk, front-end, developer, engineer, react, redux, html5, css3, css3 animation, image-free website',
                url: 'https://prashchar.uk',
                image: 'https://prashchar.uk/profile_image.jpg',
                inject: false,
            }),
            new CopyWebpackPlugin([
                {
                    from: './static',
                    to: '../dst',
                    toType: 'dir',
                },
            ]),
        ],
    };
};
