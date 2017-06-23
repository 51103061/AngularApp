'use strict';
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
//app config:
myApp.config(function($routeProvider){
    $routeProvider.when('/Home', {
        template: '<h4>Home Page</h4>'
    }).when('/Index', {
        template: '<h4>Indexing</h4>'
    }).otherwise({template: '<h4>Hello World</h4'});
});