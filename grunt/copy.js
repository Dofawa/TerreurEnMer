module.exports = function(grunt) {
    return {
        'temp-static': {
            files: [
                {
                    expand: true,
                    cwd: 'src/components/mdi',
                    src: ['fonts/**', 'css/*.map'],
                    dest: '.tmp/common',
                },
                {
                    expand: true,
                    cwd: 'src/',
                    src: 'img/**',
                    dest: '.tmp/common',
                }
            ],
        },
        'temp-dev': {
            files: [{
                expand: true,
                cwd: 'src',
                src: [
                    '**/*.html',
                    '!index.html',
                    '!components/**'
                ],
                dest: '.tmp/dev',
            }],
        },
        dev: {
            files: [{
                expand: true,
                cwd: '.tmp/common',
                src: ['**', '!css/**', '!js/concatened.js'],
                dest: 'dist'
            }, {
                expand: true,
                cwd: '.tmp/dev',
                src: '**',
                dest: 'dist'
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '.tmp/common',
                src: [
                    'fonts/*',
                    'img/*',
                ],
                dest: 'dist',
            }, {
                expand: true,
                cwd: '.tmp/dist',
                src: [
                    '**/*',
                    '!index-1.html',
                    '!js/app.js'
                ],
                dest: 'dist',
            }, ],
        },
    };
};
