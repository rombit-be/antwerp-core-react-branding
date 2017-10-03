// Import the dev settings
var config = require("./webpack.config.js");

// Set the entry point to the library
config.entry.app[0] = "./src/lib/index.tsx";



module.exports = config;