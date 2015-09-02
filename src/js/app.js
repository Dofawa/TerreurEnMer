var app;

(function() {
    'use strict';

    app = angular.module('app', [
            // 'ngRoute',
            'lumx',
            // 'restangular',
            // 'angular-jwt',
            // 'infinite-scroll'
        ])
        .config(function($locationProvider) {
            // $locationProvider.hashPrefix('!');
        });
})();
