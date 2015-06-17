'use strict';

angular
    .module('app')
    .factory('connections', Connections);

    Connections.$inject = ['$resource'];
    function Connections($resource) {
        var connections = $resource('http://transport.opendata.ch/v1/connections?from=:from&to=:to&limit=:limit', {}, {'query':  {method:'GET', isArray:false}});

        function getConnections(searchCriteria) {
            return connections.get(searchCriteria).$promise;
        }

        return {
            'getConnections': getConnections
        }
    }