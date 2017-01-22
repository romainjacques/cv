'use strict';


angular.module('langages', ['ngRoute','ngMaterial','myApp'])

    .controller('langagesCtrl', ['$scope','$http', function($scope,$http) {
        $http.get('features/langages/langages.json')
            .then(function (data) {
                $scope.langs = data;
            })
        

    }])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });;

/*
var devs = [
    {
        name: 'Angular JS',
        logo: 'angular',
        description: 'le framework Javascript par Google',
        stars: 3
    },    {
        name: 'Angular Material',
        logo: 'angular_material',
        description: 'Le material design adapté à Angular',
        stars: [{
            "full": 2,
            "half"
        }]
    },    {
        name: 'HTML/CSS',
        logo: 'html',
        description: 'Ai-je besoin de les présenter ? :)',
        stars: 3
    },{
        name: 'Bootstrap',
        logo: 'bootstrap',
        description: 'L outil de Responsive design',
        stars: 2.5
    },{
        name: 'PHP',
        logo: 'php',
        description: 'Le langage pour dynamiser vos pages',
        stars: 2
    },
    {
        name: 'Couch DB',
        logo: 'couchdb',
        description: 'La base de données orientée documents',
        stars: 2.5
    }

]*/