const path = require('node:path')
const MiniCssPlugin = require('mini-css-extract-plugin')
const HtmlWebpckPlugin = require('html-webpack-plugin')

module.exports = function(isDev) {
    return {
        //输入输出部分
        entry: path.resolve(__dirname, "../src/index.tsx"),
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "static/js/[name].[hash:8].js",
            clean: true,
            publicPath: "/"
        },
        //resolve部分
        //优化索引依赖
        resolve: {
            extensions: [
                ".tsx",".ts",".js",".jsx"
            ]  //引入这些不用加后缀
        },
        //loader
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|jsx|js)$/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    oneOf: [
                        {
                           test: /\.module\.(less | css)$/,
                           include: [path.resolve(__dirname, "../src")],
                            use: [
                                isDev ? "style-loader" : MiniCssPlugin.loader,
                                {
                                    loader: "css-loader",
                                    options: {
                                        modules: {
                                            localIdentName: "[path][name]_[local]--[hash:base64:5]"
                                        }
                                    }
                                },
                                "postcss-loader",
                                "less-loader"
                            ]
                        },
                        {
                            test: /\.css$/,
                            use: [
                                isDev ? "style-loader" : MiniCssPlugin.loader,
                                "css-loader",
                                "postcss-loader"
                            ]
                        },
                        {
                            test: /\.less$/,
                            use: [
                                isDev ? "style-loader" : MiniCssPlugin.loader,
                                "css-loader",
                                "postcss-loader",
                                "less-loader"
                            ]
                        },
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
                    generator: {
                        filename: "static/images/[name].[contenthash:8][ext]"
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/,
                    generator: {
                        filename: "static/fonts/[name].[contenthash:8][ext]"
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|rvmb|flv|wmv)(\?.*)?$/,
                    generator: {
                        filename: "static/media/[name].[contenthash:8][ext]"
                    }

                }
            ]
        },
        plugins: [
            new HtmlWebpckPlugin({
                template: path.resolve(__dirname, "../public/index.html"),
            }),
            new MiniCssPlugin({
                filename: isDev ?  "static/css/[name].css" : "static/css/[name].[contenthash:4].css"
            })
        ],
    }
}