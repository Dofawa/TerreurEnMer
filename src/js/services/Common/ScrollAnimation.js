(function() {
    'use strict';

    app.factory('ScrollAnimation', function(Animation, $timeout) {
        function ScrollAnimation(target, from, to, duration) {
            Animation.call(this); // Extend the Animation constructor
            this.target = target;
            this.from = from;
            if (typeof to == 'number') // If `to` is a number, use as it is
                this.to = to;
            else { // If `to` is a DOM element, get its y position
                var y = to.offsetTop;
                var node = to;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                this.to = y;
            }

            this.to -= 20; // Scroll before the anchor

            this.duration = duration || Math.round(Math.sqrt(Math.abs(this.from - this.to), 2) * 10);
        }
        ScrollAnimation.prototype = Object.create(Animation.prototype); // Extend animation
        ScrollAnimation.prototype.constructor = ScrollAnimation;
        ScrollAnimation.prototype.started = function() {
            this.target.scrollTo(0, this.from);
        };
        ScrollAnimation.prototype.step = function(time) {
            var progress = Math.max(0, Math.min(1, time / this.duration));
            this.target.scrollTo(0, Math.round(this.from + (this.to - this.from) * progress));
            if (progress == 1) {
                $timeout(this.stop.bind(this), 0);
            }
        };

        return ScrollAnimation;
    });
})();
