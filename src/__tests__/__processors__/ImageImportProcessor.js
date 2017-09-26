module.exports = {
    process: function (src, fileName) {
        if (
            fileName.toLowerCase().endsWith(".png") ||
            fileName.toLowerCase().endsWith(".jpg") ||
            fileName.toLowerCase().endsWith(".jpeg") ||
            fileName.toLowerCase().endsWith(".svg")
        ) {
            return "";
        }
        return src;
    }
};
