const { merge } = require("webpack-merge");
const path = require("node:path");
const getBasicConfig = require("./webpack.base");

module.exports = merge(getBasicConfig(true), {
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "../public"),
		},
		compress: false, //不压缩，热更新也快一些
		port: 5000,
		hot: true,
		historyApiFallback: true, //history路由下的404问题
	},
});
