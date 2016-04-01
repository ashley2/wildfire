'use strict';

angular.module('wildfire', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
   url: '/', 
   templateUrl: '/templates/home.html',
   controller: 'homeCtrl'
 })
  .state('auth', {
    url: '/auth', 
    templateUrl: 'templates/auth.html',
    controller: 'authCtrl'
  })
  .state('auth.login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('auth.register', {
    url: '/register',
    templateUrl: 'templates/register.html'
  })
})