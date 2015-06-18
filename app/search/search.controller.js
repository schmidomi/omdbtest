'use strict';

angular
    .module('app')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        });
    }])

    .controller('SearchController', SearchController);

    SearchController.$inject = ['connections'];
    function SearchController(connections) {
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
