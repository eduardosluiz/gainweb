'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('MainCtrl', function($scope, $http, Alunos, Treinos, $window, perfilA, Authentication) {

    $scope.alunos = [];
    $scope.treinos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];

      Alunos.all(function(error, alunos) {
        if (error) return console.warn(error);
        $scope.alunos = alunos;
        console.log($scope.alunos);
      });

        $scope.carregarTreinos = function() {
          Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
            if(error) return console.warn(error);
            $scope.treinos = treinos;
            console.log($scope.treinos);
          });
        };

    $scope.carregarExercicios = function() {
      Treinos.getExercicios($scope.treinoSelecionado.id, function(error, exercicios) {
        if(error) return console.warn(error);
        $scope.exercicios = exercicios;
      })
    };

    // $scope.init = function() {
    //   perfilA.getPerfil($scope.user.id, function (error, data){
    //     if(error) return console.warn(error);
    //     console.log(data);
    //     $scope.aluno = data[0];
    //     console.log($scope.aluno.id);
    //   });
    // };

    // $scope.carregaTreinoAlunoLogado = function(){
    //   Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
    //     if(error) return console.warn(error);
    //     $scope.treinos = treinos;
    //   })
    //   };
    $scope.carregaTreinoAlunoLogado = function(){
      Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
        if(Alunos.id == user.id) return console.log('ok');
        $scope.treinos = treinos;
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

});
