'use strict';

angular.module('myApp', [
      'ngRoute',
      'accueil',
      'exppro',
    'formation',
    'contact',
    'langages',
    'ng',
    'pascalprecht.translate',
    'ngSanitize',
      'myApp.version',
    'ngMaterial',
    'ngMessages',
    'ngCookies',
    'material.svgAssetsCache'
])
    .config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/accueil', {
        templateUrl: '/features/accueil/accueil.html',
        currentNavItem:'accueil',
        controller: 'accueilCtrl'
    }).when('/exppro', {
        templateUrl: '/features/expPro/exppro.html',
        currentNavItem: 'exppro',
        controller: 'expProCtrl'
    }).when('/formation',{
        templateUrl: 'features/formation/formation.html',
        currentNavItem: 'formation',
        controller: 'formationCtrl'

    }).when('/contact', {
        templateUrl: 'features/contact/contact.html',
        currentNavItem: 'contact',
        controller: 'contactCtrl'
    }).when('/langages', {
        templateUrl: 'features/langages/langages.html',
        currentNavItem: 'langages',
        controller: 'langagesCtrl'
    })
    .otherwise({
        redirectTo: '/accueil'
    });
}])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'locale-',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.registerAvailableLanguageKeys(['fr', 'en'], {
            'fr': 'fr',
            'en': 'en'
        });
        $translateProvider.preferredLanguage('fr');
        $translateProvider.fallbackLanguage('fr');

    }])
    .controller('myAppCtrl', function ($scope,$translate,myAppService) {

        $scope.currentLang = $translate.proposedLanguage() || $translate.use();
        $scope.currentNavItem="accueil";
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $scope.currentLang = langKey;
            myAppService.setLang($scope.currentLang);
        }
        $scope.langs = $translate.getAvailableLanguageKeys();
        myAppService.setLang($scope.currentLang);
    })
    .factory('myAppService', function () {
        var data = {};
       data.setLang = function(lang) {
            data = {
                'lang' : lang
            }
            console.log(data.lang)
            return data.lang;
        };
        data.getLang = function () {
            return data.lang;
        }
        return data;
    });
