'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('MainCtrl', function ($scope, $http, Alunos, Treinos, $window) {

    $scope.alunos = [];
    $scope.treinos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];


    var exercicio1 = {id: "1", nome: "Supindo Jigpluff", repeticoes: "4"}
    var exercicio2 = {id: "2", nome: "Supindo Snorlax", repeticoes: "10"}

    $scope.init = function() {
      $scope.exibido = true;
        $scope.exercicios.push(exercicio1);
        $scope.exercicios.push(exercicio2);
        Alunos.all(function(error, alunos) {
        if(error) return console.warn(error);
        // $scope.alunoSelecionado = alunos[0];
        $scope.alunos = alunos;
        console.log(alunos);

        Treinos.all(function(error, treinos) {
          if(error) return console.warn(error);
          // $scope.alunoSelecionado = alunos[0];
          $scope.treinos = treinos;
          console.log(treinos);
        });
      });
};


    $scope.carregarAluno = function(alunoSelecionado, treinoSelecionado) {
      console.log($scope.alunoSelecionado);

    };
    $scope.carregarTreino = function(alunoSelecionado, treinoSelecionado){
       console.log($scope.treinoSelecionado);

   };

    $scope.limpar = function() {
      if(!$window.confirm('Deseja limpar?')) {
        return;
      };
      $scope.alunoSelecionado = null;
      $scope.treinoSelecionado = null;
      $scope.dadoInserido = null;
    };

    $scope.init();
  });
