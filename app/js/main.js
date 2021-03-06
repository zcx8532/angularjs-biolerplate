(function () {

'use strict';

require('angular');
require('angular-route');
require('angular-animate');


var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);
require('./controller');
require('./service');
require('./directive');

app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
     // $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/view1", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/view1'
        });
    }
  ]);

}());
