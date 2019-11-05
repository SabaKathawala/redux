/*  the html-webpack-plugin generates an HTML file for your application by injecting automatically all your generated bundles. */
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    /* the entry point from where webpack should start building its dependency graph (https://webpack.js.org/concepts/dependency-graph/)*/
    entry: {
        main: './src/index.js'
    },
    /* this is where webpack knows where to emit the bundles and how to name these files.
    It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file. */
    output: {
        filename: '[name].bundle.js',
    },
    /* Out of the box, webpack only understands JavaScript and JSON files.
    Loaders allow webpack to process other types of files and convert them into valid modules
    that can be consumed by your application and added to the dependency graph.*/
    module: {
        rules: [
            {
                /* The test property identifies which file or files should be transformed */
                test: /\.js$/,
                /* The exclude property identifies which file or files should be ignored */
                exclude: /node_modules/,
                /* The use property indicates which loader should be used to do the transforming. */
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    /* While loaders are used to transform certain types of modules,
    plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.*/
    plugins: [htmlPlugin]
};