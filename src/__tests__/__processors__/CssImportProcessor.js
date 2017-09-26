module.exports = {
    process: function (src, fileName) {
        if (fileName.toLowerCase().endsWith(".css")) {
            return "";
        }
        return src;
    }
};
