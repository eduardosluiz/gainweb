'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('RegisterCtrl', function($scope, $rootScope, $location, $facebook, Authentication, Register, _) {
    $scope.cliente = {};
    $scope.init = function() {
      $scope.cliente = {};
      $scope.usuario = {};
    };
//cadastro de usuario e senha
    $scope.cadastrar = function() {
      var usuario = {
        username: $scope.usuario.username,
        password: $scope.usuario.password,
        tipo: $scope.usuario.tipo,
        fbid: $scope.usuario.fbid || null
      }

      //cadastro das informações do usuário conforme tipo
      Register.usuario(usuario, function(error, user) {
        if(error) return console.warn(error);
        var cliente = {
          nome: $scope.cliente.nome,
          telefone: $scope.cliente.nome,
          email: $scope.cliente.email,
          objetivo: $scope.cliente.objetivo,
          id_usuario: user.id
        };
        switch ($scope.usuario.tipo) {
          case 'A':
            Register.aluno(cliente, function(error, data) {
              if(error) return console.warn('Erro ao cadastrar: ', error);
              alert('Aluno cadastrado com sucesso');
              $location.path('/login');
            });
          break;
          case 'P':
            delete cliente.objetivo;
            Register.professor(cliente, function(error, data) {
              if(error) return console.warn('Erro ao cadastarar: ', error);
              alert('Professor cadastrado com sucesso');
              $location.path('/login');
            });
          break;
          default:
          console.log('Erro ao buscar tipo do usuario');
        }
      });
    };

    $scope.cadastrarFacebook = function() {
      var usuario = {
        username: $scope.usuario.username,
        password: $scope.usuario.password,
        tipo: $scope.usuario.tipo,
        fbid: $scope.usuario.fbid || null
      }

      //cadastro das informações do usuário conforme tipo
      Register.usuario(usuario, function(error, user) {
        if(error) return console.warn(error);
        var cliente = {
          nome: $scope.cliente.nome,
          telefone: $scope.cliente.nome,
          email: $scope.cliente.email,
          objetivo: $scope.cliente.objetivo,
          id_usuario: user.id,
          fbid: $scope.cliente.fbid
        };
        switch ($scope.usuario.tipo) {
          case 'A':
            Register.aluno(cliente, function(error, data) {
              if(error) return console.warn('Erro ao cadastrar: ', error);
              alert('Aluno cadastrado com sucesso');
              $location.path('/login');
            });
          break;
          case 'P':
            delete cliente.objetivo;
            Register.professor(cliente, function(error, data) {
              if(error) return console.warn('Erro ao cadastarar: ', error);
              alert('Professor cadastrado com sucesso');
              $location.path('/login');
            });
          break;
          default:
          console.log('Erro ao buscar tipo do usuario');
        }
      });
    };

    $scope.CadastroFacebook = function() {
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
        $scope.cliente.nome = response.name;
        $scope.usuario.fbid = response.id;
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
      });
    }

    $scope.init();
  });
