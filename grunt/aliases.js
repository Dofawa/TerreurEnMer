module.exports = function(grunt) {
    return {
        'default': [
            'dev'
        ],
        'dev': [
            'dev-js',
            'dev-css',
            'copy:temp-static',
            'copy:temp-dev',
            'injector:dev',
            'clean:dist',
            'copy:dev'
        ],
        'dev-js': [
            'newer:concat:all',
            'newer:replace:all'
        ],
        'dev-css': [
            'sass:all',
            'uncss:dev'
        ],

        'dist': [
            'dist-js',
            'dist-css',
            'copy:temp-static',
            'injector:dist',
            'htmlmin:dist',
            'compress:dist',
            'clean:dist',
            'copy:dist',
            'clean:temp'
        ],
        'dist-js': [
            'concat:all',
            'replace:all',
            'ngAnnotate:dist',
            'ngtemplates:dist',
            'uglify:dist'
        ],
        'dist-css': [
            'sass:all',
            'uncss:dist',
            'cssmin:dist'
        ]
    };
};
