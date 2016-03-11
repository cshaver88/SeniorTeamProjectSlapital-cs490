'use strict';

angular.module('slapitalApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
        .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
        .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
 });