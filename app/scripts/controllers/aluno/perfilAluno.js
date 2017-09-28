'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilAlunoCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('perfilAlunoCtrl', function($scope, $http, Alunos, Treinos, $window, perfilA, Authentication) {

    $scope.alunos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];

    Authentication.getLoggedInUser(function(data) {
      $scope.user = data;
      //aqui eu faço uma requisição pro banco e associo o retorno dela pra um variavel no scope
      console.log('VARIAVEL ASSOCIADA $scope.user', $scope.user);
      return $scope.user;
    });

    $scope.init = function() {
      Alunos.all(function(error, alunos) {
        if (error) return console.warn(error);
        $scope.alunos = alunos;
      });
    };
    $scope.init = function() {
      perfilA.getPerfil($scope.user.id, function (error, data){
        if(error) return console.warn(error);
        console.log(data);
        $scope.aluno = data[0];
        console.log($scope.aluno.nome);
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
