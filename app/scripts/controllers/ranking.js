'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilAlunoCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('RankingCtrl', function($scope, Alunos, $window, Authentication, Ranking, $location) {

    $scope.init = function() {
      Authentication.getLoggedInUser(function(user) {
        $scope.user = user;
        console.log($scope.user)
        Ranking.getRanking(function(err, ranking) {
          $scope.ranking = ranking;
        });
      });
    };

    $scope.adicionarPontos = function(aluno) {
      aluno.pontos += 5;
      Ranking.updateRanking(aluno.id, aluno, function(err, rank) {
        if(err) return console.warn(err);
        $window.alert('Ranking atualizado com sucesso');
      });
    };

    $scope.removerPontos = function(aluno) {
      aluno.pontos -= 5;
      Ranking.updateRanking(aluno.id, aluno, function(err, rank) {
        if(err) return console.warn(err);
        $window.alert('Ranking atualizado com sucesso');
      });
    };

    $scope.voltar = function() {
      if($scope.user.tipo == 'A') {
        $location.path('/aluno/perfil');
      } else {
        $location.path('/professor/perfil');
      }
    };

    $scope.init();
  });
