const path = require('path');

module.exports = {
    entry: './url.js',
    output: {
        filename: "domurl-lib.js",
        path: path.resolve(__dirname,"dist"),
        library: {
            name: 'domUrl',
            type: 'umd',
        },
    },
};