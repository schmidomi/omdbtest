'use strict';

angular
    .module('app')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/overview', {
            templateUrl: 'overview/overview.html',
            controller: 'OverviewController',
            controllerAs: 'vm'
        });
    }])

    .controller('OverviewController', OverviewController);

    OverviewController.$inject = ['connections'];
    function OverviewController(connections) {
        var vm = this;

        vm.searchCriteria = {
            'from': "Meiringen",
            'limit': 6
        };

        vm.search = search;

        function search() {
            vm.spinner = true;
            connections.getConnections(vm.searchCriteria).then(
            function (results) {
                vm.spinner = false;
                vm.connections = results;
            }, function (error) {
                console.log(error);
            });
        }

    }
