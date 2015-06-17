'use strict';

angular
    .module('app', [
        'ngResource',
        'ngRoute'
    ])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/overview'});
    }]);