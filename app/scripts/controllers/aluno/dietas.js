'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:dietasCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('dietasCtrl', function($scope, $http, Dietas, $window, $location) {

    $scope.init = function() {
      $scope.dietas = [];
      Dietas.getDietas(function(error, dietas) {
        if(error) return console.warn(error);
        $scope.dietas = dietas;
      });
    };

    $scope.voltar = function() {
      $location.path('/aluno/perfil');
    };

    $scope.editar = function(id) {
      $location.path('/aluno/dietas/' + id);
    };

    $scope.excluir = function(id) {
      if(!$window.confirm('Essa operação não poderá ser revertida, deseja continuar?')) {
       return;
     }
     Dietas.deleteDieta(id, function(error, data) {
       if(error) {
         console.log(error);
         return;
       }
       $scope.init();
     });
    };


    $scope.init();
  });
