'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:dietasCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('editDietaCtrl', function($scope, $http, Dietas, $window, $location, $routeParams) {

    $scope.init = function() {
      Dietas.getDieta($routeParams.id, function(error, dieta) {
        if(error) return console.warn(error);
        $scope.dieta = dieta;
      });
    };

    $scope.voltar = function() {
      $location.path('/aluno/dietas');
    };

    $scope.salvar = function(dieta) {
      Dietas.updateDieta(dieta, function(error, dieta) {
        if(error) return console.warn(error);
        $window.alert('Dieta salva com sucesso');
        $location.path('/aluno/dietas');
      });
    };

    $scope.init();
  });
