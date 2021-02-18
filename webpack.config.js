const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

const plugins = [];
plugins.push(new HtmlWebpackPlugin({
    title: "Home",
    template: "src/index.html",
    filename: "index.html",
    minify: true
}));
plugins.push(new HtmlWebpackPartialsPlugin({
    path: path.join(__dirname, "./src/views/partials/start.html"),
    location: "pageStart",
    template_filename: ["index.html"],
    minify: true
}),);
plugins.push(new HtmlWebpackPartialsPlugin({
    path: path.join(__dirname, "./src/views/partials/end.html"),
    location: "pageEnd",
    template_filename: ["index.html"],
    minify: true
}),);
for(let i = 1; i <= 16; i++) {
    let location = "page"+i;
    let pathPartials = i+".html";
    plugins.push(new HtmlWebpackPartialsPlugin({
        path: path.join(__dirname, "./src/views/partials/"+pathPartials),
        location: location,
        template_filename: ["index.html"],
        minify: true
    }),);
}

const config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "story")
    },
    plugins: plugins
}

module.exports = config;