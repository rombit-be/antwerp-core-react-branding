// Import the dev settings
var config = require("./webpack.prod.js");

config.output.path = __dirname + "/src/demo/static";
delete config.externals;

module.exports = config;
