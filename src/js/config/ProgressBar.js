(function() {
    'use strict';

    app.run(function($rootScope, Progress) {
            // Progress bar
            $rootScope.$on('$routeChangeStart', function() {
                Progress.show();
            });
            $rootScope.$on('$routeChangeSuccess', function() {
                Progress.hide();
            });
            $rootScope.$on('$routeChangeError', function() {
                Progress.hide();
            });
        });
})();
