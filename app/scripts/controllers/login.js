'use strict';
/**
 * @ngdoc function
 * @name gainApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gainApp
 */

angular.module('gainApp')
  .controller('LoginCtrl', function($scope, $rootScope, $location, Authentication, $window, $facebook, $localStorage) {
    $scope.login = function() {
      Authentication.login($scope.username, $scope.password, function(error, data) {
          if (!error) {
            $rootScope.$emit('carregaNav', data);
            if(data.tipo === 'P') {
              $location.path('/professor/perfil');
              // window.localStorage = $scope.username;
            } else {
              $location.path('/aluno/perfil');
            }
          } else {
            $scope.error = error;
          }
      });
    };

    $scope.isLoggedIn = false;

    //DAQUI PRA BAIXO REGISTER
    $scope.loginFacebook = function() {
      $facebook.login()
      .then(function(err, res) {
        console.log(err, res)
        refresh();
      })
      .catch(function(err) {
        console.log('Error', err);
      });
    };

    function refresh() {
      $facebook.api("/me")
      .then(function(response) {
        // $scope.cliente.fbid = response.id;
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
        Authentication.loginFacebook({id: response.id}, function(err, data) {
          if (!err) {
            $rootScope.$emit('carregaNav', data);
            if(data.tipo === 'P') {
              $location.path('/professor/perfil');
            } else {
              $location.path('/aluno/perfil');
            }
          } else {
            $scope.welcomeMsg = 'Não registrado';
          }
        })
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
      });
    }

    refresh();

  });
