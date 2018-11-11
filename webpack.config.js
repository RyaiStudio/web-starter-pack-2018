var _path = require("path")

module.exports = {
	entry: {
        bundle: [
            "./assets/js/app.js"
        ]
    },
    output: {
        path: _path.join(__dirname, "assets"),
        filename: "[name].app.js",
        publicPath: "/assets/"
    },
    externals: {},
	resolve: {
	    alias: {},
        extensions: ['*', '.js', '.json']
	},
    watch: false,
    mode: "development"
}