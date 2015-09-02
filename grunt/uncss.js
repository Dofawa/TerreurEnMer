module.exports = function(grunt) {
    return {
        options: {
            stylesheets: ['../.tmp/common/css/app.css'],
            ignore: [
                '.ng-move',
                '.ng-enter',
                '.ng-leave',
                '.created_by_jQuery',
                // Lumx
                /\.btn/,
                /\.card/,
                /\.data-table/,
                // /\.dialog/,
                /\.dropdown/,
                /\.fab/,
                // /\.input\-file/,
                /\.notification/,
                /\.progress/,
                // /\.radio/,
                /\.ripple/,
                /\.search\-filter/,
                /\.lx\-select/,
                // /\.tabs/,
                /\.text\-field/,
                /\.toolbar/,
                /\.tooltip/,
                /\.float/, // TODO: remove this
                // /\.sidebar/,

                // Color used in directives
                '.tc-brown-900', '.bgc-brown-900', '.bgc-light-blue-400', '.bgc-red-500', '.bgc-light-green-600', '.bgc-yellow-800', '.tc-yellow-700', '.tc-grey-500', '.tc-brown-500', '.tc-red-500', '.tc-red-200', '.bgc-red-600', '.bgc-red-200',

                // Icons used in directives
                '.mdi-check', '.mdi-alert-circle', '.mdi-alert', '.mdi-information-outline',

                /\.player/
            ]
        },
        dev: {
            files: {
                '.tmp/dev/css/app.css': ['src/index.html', 'src/partials/**/*.html']
            }
        },
        dist: {
            files: {
                '.tmp/dist/css/app.css': ['src/index.html', 'src/partials/**/*.html']
            }
        }
    };
}
