(function() {
    'use strict';

    app.factory('DialogHelper', function(LxDialogService) {
        function open(id) {
            return LxDialogService.open(id);
        }

        function close(id) {
            return LxDialogService.close(id);
        }

        return {
            open: open,
            close: close,
        }
    });
})();
