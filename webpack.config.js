const path = require('path')
const env = process.env.NODE_ENV
module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: path.resolve("./public/dist"),
        filename: 'bundle.js'
    },
    watch: env === "development",
    mode: env === "development" ? "development" : "production"
}