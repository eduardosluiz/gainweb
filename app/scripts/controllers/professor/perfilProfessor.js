'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilProfessorCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('perfilProfessorCtrl', function($scope, $http, Alunos, Treinos, $window, perfilP, Authentication) {

    //$scope.exercicios = [];
    $scope.aluno_treino = [];
    $scope.showMeEditar = false;
    $scope.showMeTreinoP = false;
    $scope.showMeNewTreino = false;
    $scope.treinos = [];

    // $scope.init = function() {
    //   Professor.all(function(error, professores) {
    //     if (error) return console.warn(error);
    //     $scope.professor = professores;
    //   });
    // };
    $scope.init = function() {
      Authentication.getLoggedInUser(function(user) {
        $scope.user = user;
        //aqui eu faço uma requisição pro banco e associo o retorno dela pra um variavel no scope
        console.log('VARIAVEL ASSOCIADA $scope.user', $scope.user);
        perfilP.getPerfil($scope.user.id, function (error, professor){
          console.log($scope.user.id);
          if(error) return console.warn(error);
          $scope.professor = professor[0];
          console.log($scope.professor);
        });
      });
    };

    Treinos.getTreinos(function(error, treinos) {
      if(error) return console.warn(error);
      $scope.treinos = treinos;
    });

//get perfil professor ( verificar )

    $scope.newTreino = function() {
      if($scope.showMeEditar === true || $scope.showMeTreinoP === true){
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
        $scope.showMeEditar = false;
        $scope.showMeTreinoP = false;
      }else{
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
      }
    };
    $scope.TreinoP = function() {
      if($scope.showMeEditar === true || $scope.showMeNewTreino === true){
        $scope.showMeTreinoP = !$scope.showMeTreinoP;
        $scope.showMeEditar = false;
        $scope.showMeNewTreino = false;
      }else{
      $scope.showMeTreinoP = !$scope.showMeTreinoP;
    }
    };
    $scope.Editar = function() {
      if($scope.showmeTreinoP === true || $scope.showMeNewTreino === true){
        $scope.showMeEditar = !$scope.showMeEditar;
        $scope.showmeTreinoP = false;
        $scope.showMeNewTreino = false;
      }else{
      $scope.showMeEditar = !$scope.showMeEditar;
      }
    };

    $scope.newExercicio = function() {
      $scope.exercicios.push({nome: null, repeticoes: null});
    };
    // $scope.carregarTreinos = function() {
    //   Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
    //     if(error) return console.warn(error);
    //     $scope.treinos = treinos;
    //   });
    // };

    $scope.carregarExercicios = function(treinoSelecionado) {
      Treinos.getExercicios(treinoSelecionado.id, function(error, exercicios) {
        if(error) return console.warn(error);
        console.log(exercicios);
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
    $scope.showMeEditar = !$scope.showMeEditar;
    $scope.showMeTreinoPronto = !$scope.showMeTreinoPronto;
    $scope.showMeNovoTreino = !$scope.showMeNovoTreino;
    $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;

    $scope.init();
  });
