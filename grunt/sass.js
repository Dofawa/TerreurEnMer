module.exports = function(grunt) {
    return {
        all: {
            options: {
                update: true,
                loadPath: [
                    'src/components',
                    'src/components/lumx/dist/scss',
                    'src/components/bourbon/app/assets/stylesheets',
                    'src/components/mdi/scss',
                    'src/css'
                ]
            },
            files: {
                '.tmp/common/css/app.css': 'src/css/main.scss'
            }
        }
    };
};
