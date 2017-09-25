'use strict';
/**
 * @ngdoc function
 * @name gainApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gainApp
 */

angular.module('gainApp')
  .controller('LoginCtrl', function($scope, $rootScope, $location, Authentication) {
    $scope.login = function() {
      Authentication.login($scope.username, $scope.password, function(error, data) {
          if (!error) {
            $rootScope.$emit('carregaNav', data);
            if(data.tipo === 'P') {
              $location.path('/listaProf');
            } else {
              $location.path('/');
            }
          } else {
            $scope.error = error;
          }
      });
    };
  });
