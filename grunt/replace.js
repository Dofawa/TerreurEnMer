module.exports = function(grunt) {
    return {
        all: {
            // options: {
            //     patterns: [{
            //         match: 'apiUrl',
            //         replacement: '<%= configuration.apiUrl %>'
            //     }]
            // },
            src: '.tmp/common/js/concatened.js',
            dest: '.tmp/common/js/app.js'
        }
    };
};
