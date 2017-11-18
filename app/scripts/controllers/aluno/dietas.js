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

    $scope.model = {};

    $scope.init = function() {
      $scope.dietas = [];
      Dietas.getDietas(function(error, dietas) {
        if(error) return console.warn(error);
        $scope.dietas = dietas;
      });
    };

    $scope.uploadFile = function() {
      var file = $scope.myFile;
      console.log('file is ', $scope.myFile);
      console.dir(file);
      Dietas.uploadFileToUrl(file);
    };

    $scope.nova = function() {
      $scope.createDieta = true;
    };

    $scope.salvarDieta = function() {
      return console.log($scope.model)
      Dietas.criarDieta($scope.model, function(err, res) {
        if(err) return console.warn(err);
        $window.alert('Dieta criada com sucesso');
      });
    }

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
