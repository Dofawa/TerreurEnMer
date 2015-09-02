module.exports = function(grunt) {
    return {
        options: {
            template: 'src/index.html',
            ignorePath: ['.tmp/common/', '.tmp/dev', '.tmp/dist'],
            addRootSlash: false
        },
        dev: {
            options: {
                destFile: '.tmp/dev/index.html',
            },
            src: [
                '.tmp/common/css/app.css',
                '.tmp/common/js/app.js'
            ]
        },
        dist: {
            options: {
                destFile: '.tmp/dist/index-1.html'
            },
            src: [
                '.tmp/dist/css/app.min.css',
                '.tmp/dist/js/app.min.js'
            ]
        }
    };
};
