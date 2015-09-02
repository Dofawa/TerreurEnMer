(function() {
    'use strict';

    app.factory('Progress', function(LxProgressService) {
        function show() {
            LxProgressService.linear.show('#5fa2db', '#progress');
        }

        function hide() {
            LxProgressService.linear.hide();
        }

        return {
            show: show,
            hide: hide,
        };
    });
})();
