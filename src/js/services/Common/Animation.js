(function() {
    'use strict';

    app.factory('Animation', function($window, $timeout) {
        function Animation(

        ) {
            this._timer = null;
            this._startTime = null;
            var _this = this;
            this._step = function(now) {
                try {
                    _this.step(now - _this._startTime);
                } catch (e) {
                    _this._timer = null;
                    _this._startTime = null;
                    _this.stopped();
                    throw e;
                }
                _this._timer = Animation.requestAnimationFrame.call($window, _this._step);
            };
        }
        Animation.requestAnimationFrame =
            $window.requestAnimationFrame ||
            $window.mozRequestAnimationFrame ||
            $window.webkitRequestAnimationFrame ||
            $window.msRequestAnimationFrame ||
            function(step) {
                return $timeout(step, 16);
            };
        Animation.cancelAnimationFrame =
            $window.cancelAnimationFrame ||
            $window.mozCancelAnimationFrame ||
            $window.webkitCancelAnimationFrame ||
            $window.msCancelAnimationFrame ||
            function(timer) {
                $timeout.cancel(timer);
            };
        Animation.prototype.start = function() {
            if (this._timer)
                return;
            var canContinue = this.starting();
            if (!canContinue && canContinue != null)
                return;
            this._timer = Animation.requestAnimationFrame.call($window, this._step);
            this._startTime = $window.performance ? performance.now() : Date.now();
            this.started();
        };
        Animation.prototype.stop = function() {
            if (!this._timer)
                return;
            var canContinue = this.stopping();
            if (!canContinue && canContinue != null)
                return;
            Animation.cancelAnimationFrame.call($window, this._timer);
            this._timer = null;
            this._startTime = null;
            this.stopped();
        };
        Animation.prototype.isRunning = function() {
            return this._timer != null;
        };
        Animation.prototype.starting =
            Animation.prototype.started =
            Animation.prototype.stopping =
            Animation.prototype.stopped =
            Animation.prototype.step =
            function() {};

        return Animation;
    });
})();
