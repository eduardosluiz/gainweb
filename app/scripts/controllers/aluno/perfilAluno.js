'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilAlunoCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('perfilAlunoCtrl', function($scope, $http, Alunos, Treinos, $window, perfilA, Authentication, Ranking) {

    $scope.alunos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];
    $scope.showMeMeusTreinos = false;
    $scope.showMeMinhasDietas = false;
    $scope.showMeEditarPerfil = false;
    $scope.model = {};
    $scope.ver = [];
    $scope.showHistoricoObjetivo = false;



    $scope.init = function() {
      Authentication.getLoggedInUser(function(data) {
        $scope.user = data;
        perfilA.getPerfil($scope.user.id, function(error, data) {
          if (error) return console.warn(error);
          $scope.aluno = data[0];
        });
      });
    };

    $scope.carregarTreinos = function() {
      Alunos.getTreinos($scope.user.id, function(error, treinos) {
        if (error) return console.warn(error);
        $scope.treinos = treinos;
      });
    };

    $scope.carregarExercicios = function() {
      if($scope.model.treinoSelecionado){
        Treinos.getExercicios($scope.model.treinoSelecionado, function(error, exercicios) {
           if (error) return console.warn(error);
           $scope.exercicios = exercicios;
         });
      }
    };

    $scope.limpar = function() {
      if (!$window.confirm('Deseja limpar?')) {
        return;
      };
      $scope.alunoSelecionado = null;
      // $scope.treinoSelecionado = null;
      $scope.dadoInserido = null;
    };

    $scope.meusTreinos = function() {
      $scope.carregarTreinos();
      if ($scope.showMeMinhasDietas === true || $scope.showMeEditarPerfil === true) {
        $scope.showMeMeusTreinos = !$scope.showMeMeusTreinos;
        $scope.showMeEditarPerfil = false;
        $scope.showMeMinhasDietas = false;
      } else {
        $scope.showMeMeusTreinos = !$scope.showMeMeusTreinos;
      }
    };
    $scope.minhasDietas = function() {
      if ($scope.showMeMeusTreinos === true || $scope.showMeEditarPerfil === true) {
        $scope.showMeMinhasDietas = !$scope.showMeMinhasDietas;
        $scope.showMeEditarPerfil = false;
        $scope.showMeMeusTreinos = false;
      } else {
        $scope.showMeMinhasDietas = !$scope.showMeMinhasDietas;
      }
    };

    $scope.editarPerfil = function() {
      if ($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditarPerfil === true) {
        $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
        $scope.showMeMeusTreinos = false;
        $scope.showMeMinhasDietas = false;
      } else {
        $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
      }
    };

//update perfil funcionando

//
// $scope.updatePerfilA = function() {
//   perfilA.updatePerfilA($scope.aluno, function(error, aluno) {
//     if (error) return console.warn(error);
//     $window.alert('Perfil atualizado com sucesso');
//     $scope.showMeEditarPerfil = null;
//   });
// };

    $scope.historicoObjetivo = function() {
      $scope.showHistoricoObjetivo = !$scope.showHistoricoObjetivo;
      perfilA.buscarObjetivos($scope.user.id, function(err, res) {
        if(err) return console.warn(err);
        $scope.objetivos = res;
        console.log('historico', res)
      })
    };


    $scope.abrirGif = function(index){
      console.log(index);
      $scope.ver[index] = !$scope.ver[index];
    };

    $scope.updatePerfilA = function() {
      // return console.log($scope.aluno)
      perfilA.updatePerfilA($scope.aluno, function(error, aluno) {
        if (error) return console.warn(error);

        perfilA.criaObjetivo($scope.aluno, function(err, objetivoCriado){
          if(err) return console.warn(err);
          $window.alert('Perfil atualizado com sucesso');
          $scope.showMeEditarPerfil = null;
        });
      });
    };

    $scope.showMeEditarPerfil = $scope.showMeEditarPerfil;
    $scope.showMeMeusTreinos = $scope.showMeMeusTreinos;
    $scope.showMeMinhasDietas = $scope.showMeMinhasDietas;

    $scope.init();
  });
