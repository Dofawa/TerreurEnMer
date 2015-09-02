(function() {
    'use strict';

    app.run(function($window, $rootScope, ScrollAnimation, DialogHelper, Sidebar) {
        // Globalize isGranted function
        $rootScope.scrollTo = function(elementId) {
            var animation = new ScrollAnimation($window, $window.pageYOffset, document.getElementById(elementId));
            animation.start();
        };
        $rootScope.dialog = DialogHelper;
        $rootScope.sidebar = Sidebar;
    });
})();
