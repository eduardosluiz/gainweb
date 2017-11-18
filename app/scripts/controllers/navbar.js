'use strict';

/**
 * @ngdoc function
 * @description
 */
angular.module('gainApp')
  .controller('NavbarCtrl', function($scope, Authentication, $rootScope, $location, Alunos) {
    $scope.init = function() {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;

      $scope.logado = Authentication.isLoggedIn();


      Authentication.getLoggedInUser(function(data) {

        if(!$scope.logado) {
          Authentication.logout(function() {
            $location.path('/login');
          });
        }
        $scope.user = data;

        //aqui eu faço uma requisição pro banco e associo o retorno dela pra um variavel no scope
        console.log('VARIAVEL ASSOCIADA $scope.user', $scope.user);

        })
      $scope.logado = Authentication.isLoggedIn();

    };
    //acessando aluno para pegar as informacoes
    // Alunos.get($scope.user.id, function(error, aluno){
    // if($scope.user.id_usuario == aluno.id)
    //   $scope.entidade = aluno;
    //   console.log('ok', $scope.entidade);
    // });


    $scope.sair = function() {
      Authentication.logout(function() {
        $location.path('/login');
        $scope.logado = false;
      });
    };

    $rootScope.$on('carregaNav', function() {
      $scope.logado = Authentication.isLoggedIn();
      console.log('VARIAVEL ASSOCIADA $scope.logado', $scope.user);
      $scope.init();
    });

    $scope.init();
  });
