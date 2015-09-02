module.exports = function(grunt) {
    return {
        all: {
            src: [
                // 'src/components/jquery/dist/jquery.js',
                'src/js/dependencies/jquery.min.js',
                'src/components/velocity/velocity.min.js',
                'src/components/angular/angular.min.js',
                'src/components/lodash/lodash.min.js',
                // 'src/components/moment/min/moment-with-locales.min.js',
                'src/components/angular-route/angular-route.min.js',
                // 'src/components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                // 'src/components/angular-jwt/dist/angular-jwt.min.js',
                'node_modules/relative-date/lib/relative-date.js',
                // 'src/components/restangular/dist/restangular.min.js',
                'src/components/lumx/dist/lumx.min.js',
                'src/js/app.js',
                'src/js/config/**',
                'src/js/locales/locale.fr.js',
                'src/js/filters/**',
                'src/js/services/**',
                'src/js/controllers/**'
            ],
            dest: '.tmp/common/js/concatened.js'
        },
    };
};
