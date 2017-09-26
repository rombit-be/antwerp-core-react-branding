module.exports = {
    process: function (src, fileName) {
        if (fileName.toLowerCase().endsWith(".scss")) {
            return "";
        }
        return src;
    }
};