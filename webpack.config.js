const path = require('path');

let entry = __dirname + '/url.js';
let outputPath = path.resolve(__dirname, "dist");

module.exports = {
    entry: entry,
    output: {
        filename: "domurl-lib.js",
        path: outputPath,
        library: {
            name: 'webpackNumbers',
            type: 'umd',
          },
    },
};