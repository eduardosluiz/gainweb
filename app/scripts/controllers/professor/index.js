/**
 * @ngdoc function
 * @name gainApp.controller:listaProfCtrl
 * @description
 * # ProfCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('listaProfCtrl', function($scope, $http, Alunos, Treinos, professorServ, $window) {


  $scope.Professores = [];
  $scope.init = function() {
    professorServ.all(function(error, professores) {
      if (error) return console.warn(error);
      console.log(professores);
      $scope.Professores = professores;
    });
  };

  $scope.carregarProfessores = function() {
    professorServ.all($scope.id, $scope.nome, function(error, professores){
      if(error) return console.warn(error);
      $scope.Professores = professores;
    });
  };

  $scope.limpar = function() {
    if (!$window.confirm('Deseja limpar?')) {
      return;
    };
  $scope.professorSelecionado = null;
    };
$scope.init();
});
