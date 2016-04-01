'use strict';

var app = angular.module('wildfire');


app.controller('authCtrl', function($scope) {
  $scope.login = function(user){
    console.log(user)
  }

  $scope.register = function(user){
    console.log(user)

  }
})