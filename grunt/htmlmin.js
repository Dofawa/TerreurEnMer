module.exports = function(grunt) {
    return {
        dist: {
            options: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true, // Only if you don't use comment directives!
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            src: ['.tmp/dist/index-1.html'],
            dest: '.tmp/dist/index.html'
        },
    };
};
