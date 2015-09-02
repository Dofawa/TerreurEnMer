module.exports = function(grunt) {
    return {
        dist: {
            files: {
                '.tmp/dist/css/app.min.css': '.tmp/dist/css/app.css'
            }
        }
    };
};
