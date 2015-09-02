module.exports = function(grunt) {
    return {
        source: {
            options: {
                globals: {
                    jQuery: true,
                    angular: true
                }
            },
            files: {
                src: ['Gruntfile.js', 'grunt/*.js', 'src/**/*.js', '!src/components/**/*']
            }
        }
    };
};
