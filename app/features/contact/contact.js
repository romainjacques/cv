'use strict';

angular.module('contact', ['ngRoute','ngMaterial','myApp'])


    .controller('contactCtrl', [function() {
        this.infos = links;
    }]);

var links = [
    /*{
        type: 'fa fa-user-plus',
        text: 'Me contacter'
    },*/    {
        type: 'fa fa-home',
        text: '40 boulevard de Sainte-Marguerite, 13009 Marseille'
    },    {
        type: 'fa fa-phone',
        text: '06 01 23 77 12'
    },    {
        type: 'fa fa-envelope',
        text: 'romain.jacques111@gmail.com'
    },    {
        type: 'fa fa-linkedin-square',
        text: 'https://fr.linkedin.com/in/romainjacques'
    },

];