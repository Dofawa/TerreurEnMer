module.exports = function(grunt) {
    return {
        dist: {
            options: {
                module: 'app',
                append: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true, // Only if you don't use comment directives!
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            cwd: 'src',
            src: 'partials/**/*.html',
            dest: '.tmp/dist/js/app.js'
        }
    };
};
