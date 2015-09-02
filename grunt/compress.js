module.exports = function(grunt) {
    return {
        dist: {
            options: {
                mode: 'gzip'
            },
            expand: true,
            cwd: '.tmp/dist',
            src: ['js/app.min.js', 'css/app.min.css', 'partials/**'],
            dest: '.tmp/dist',
            rename: function(dest, src) {
                var folder = src.substring(0, src.lastIndexOf('/'));
                var filename = src.substring(src.lastIndexOf('/'), src.length);

                return dest + folder + filename + '.gz';
            }

        }
    };
}
