'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('MeusTreinosCtrl', function($scope, $http, Alunos, Treinos, $window, perfilA, Authentication) {

    $scope.treinos = [];
    $scope.exercicios = [];
    $scope.aluno_treino = [];

    Authentication.getLoggedInUser(function(data) {
      $scope.user = data;
      //aqui eu faço uma requisição pro banco e associo o retorno dela pra um variavel no scope
      console.log('VARIAVEL ASSOCIADA $scope.user', $scope.user);
      perfilA.getPerfil($scope.user.id, function (error, data){
        if(error) return console.warn(error);
        console.log(data);
        $scope.aluno = data[0];
        console.log($scope.aluno.nome);
        Alunos.getTreinos($scope.aluno.id, function(error, treinos) {
            if(error) return console.warn(error);
            $scope.treinos = treinos;
            console.log($scope.treinos);
          });
      });
    });

    $scope.carregarExercicios = function() {
      Treinos.getExercicios($scope.treinoSelecionado.id, function(error, exercicios) {
        if(error) return console.warn(error);
        $scope.exercicios = exercicios;
      })
    };

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
