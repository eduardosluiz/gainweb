'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilProfessorCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('perfilProfessorCtrl', function($scope, $http, Alunos, Treinos, $window) {

    $scope.alunos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];

    $scope.init = function() {
      Alunos.all(function(error, alunos) {
        if (error) return console.warn(error);
        $scope.alunos = alunos;
      });
    };

    $scope.carregarTreinos = function() {
      Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
        if(error) return console.warn(error);
        $scope.treinos = treinos;
      });
    };

    $scope.carregarExercicios = function() {
      Treinos.getExercicios($scope.treinoSelecionado.id, function(error, exercicios) {
        if(error) return console.warn(error);
        $scope.exercicios = exercicios;
      })
    };

    $scope.limpar = function() {
      if (!$window.confirm('Deseja limpar?')) {
        return;
      };
      $scope.alunoSelecionado = null;
      $scope.treinoSelecionado = null;
      $scope.dadoInserido = null;
    };

    $scope.init();
  });
