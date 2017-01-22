'use strict';

angular.module('exppro', ['ngRoute','ngMaterial','myApp'])

    .controller('expProCtrl', ['$scope','$http', function($scope,$http) {
        $http.get('features/expPro/exppro.json')
            .then(function(data) {
                $scope.experiences = data;
            })
    }]);