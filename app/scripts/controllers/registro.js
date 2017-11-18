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
        tipo: $scope.usuario.tipo
      }

      //cadastro das informações do usuário conforme tipo
      Register.usuario(usuario, function(error, user) {
        if(error) return console.warn(error);
        console.log(user.id);
        var cliente = {
          nome: $scope.cliente.nome,
          telefone: $scope.cliente.nome,
          email: $scope.cliente.email,
          objetivo: $scope.cliente.objetivo,
          id_usuario: user.id
          // fbid: $scope.cliente.fbid
        };
        console.log(cliente);
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
      }

      //cadastro das informações do usuário conforme tipo
      Register.usuario(usuario, function(error, user) {
        if(error) return console.warn(error);
        console.log(user.id);
        var cliente = {
          nome: $scope.cliente.nome,
          telefone: $scope.cliente.nome,
          email: $scope.cliente.email,
          objetivo: $scope.cliente.objetivo,
          id_usuario: user.id,
          fbid: $scope.cliente.fbid
        };
        console.log(cliente);
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
        $scope.cliente.fbid = response.id;
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

    $scope.init();
  });
