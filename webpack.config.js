const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            filename: 'styles.css'
          }),
        ],
        module:{
            rules:[
                {
                    test:/\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test:/\.(sa|sc|c)ss$/,
                    use: [
                        isProduction ?
                        {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                            sourceMap: true,
                            hmr: !isProduction
                          }
                        } : 
                        {
                          loader: "style-loader"
                        },
                        {
                          loader: "css-loader",
                          options: {
                            sourceMap: true
                          }
                        },
                        {
                          loader: "sass-loader",
                          options: {
                            sourceMap: true
                          }
                        }
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};