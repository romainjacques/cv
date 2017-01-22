'use strict';

angular.module('formation', ['ngRoute','ngMaterial','myApp'])

    .controller('formationCtrl', ['$scope','$http','myAppService', function($scope, $http, myAppService) {
        $http.get('features/formation/formation.json')
            .then(function (data) {
                $scope.formations = data;
            })
       $scope.lang = myAppService.getLang();
        if ($scope.lang.valueOf() == 'fr') {
            var pouet = true;
        }
    }]);