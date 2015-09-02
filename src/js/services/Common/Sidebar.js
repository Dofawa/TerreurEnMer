(function() {
    'use strict';

    app.service('Sidebar', Sidebar);

    function Sidebar() {
        this.shown = false;
    }

    Sidebar.prototype.show = function() {
        this.shown = true;
    }
    Sidebar.prototype.hide = function() {
        this.shown = false;
    }
    Sidebar.prototype.toggle = function() {
        this.shown = !this.shown;
    }
})();
