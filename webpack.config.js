// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');
// const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
//     plugins: [
//         new MiniCssExtractPlugin(),
//         new CssMinimizerWebpackPlugin(),
//         new TerserWebpackPlugin(),
//         new HTMLWebpackPlugin({
//             template: "src/index.pug",
//             filename: "index.html"
//         }),
//     ],
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserWebpackPlugin(),
//             new CssMinimizerWebpackPlugin()
//         ]
//     },
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/ 
            }
            // {
            //     test:/\.pug$/,
            //     use: 'pug-loader'
            // }
        ]
    }
};