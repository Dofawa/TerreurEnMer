(function() {
  'use strict';

  app.service('Storage', ['$window', Storage]);

  function Storage($window) {
    this.prefix = 'mulou-garous.';
    this.storage = $window.localStorage;
  }

  Storage.prototype.has = function(key) {
    var value = this.storage.getItem(this.prefix + key);
    return typeof value != 'undefined' && value !== null
  }
  Storage.prototype.get = function(key, defaultVal) {
    if(this.has(key))
      return JSON.parse(this.storage.getItem(this.prefix + key));
    else
      return defaultVal;
  }
  Storage.prototype.set = function(key, value) {
    return this.storage.setItem(this.prefix + key, JSON.stringify(value));
  }
  Storage.prototype.remove = function(key) {
    if(this.has(key)) {
      this.storage.removeItem(this.prefix + key);
      return true;
    }
    else
      return false;
  }
})();
