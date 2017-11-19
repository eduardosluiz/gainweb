'use strict';

angular.module('gainApp')
  .service('perfilA', function ($http) {
      var service = this;
      const API_URL = 'https://gainweb.herokuapp.com/api/v1';

      service.getPerfil = function(id_aluno, callback) {
        $http.get(API_URL + '/alunosUsuario/'+id_aluno)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      service.updatePerfilA = function(aluno, callback) {
        $http.put(API_URL + '/alunos/' + aluno.id_usuario, aluno)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };
//criação do historicoObjetivo
      service.criaObjetivo = function(aluno, callback) {
        var objetivo = {
          data: new Date(),
          objetivo: aluno.objetivo,
          id_aluno: aluno.id
        };
        console.log('objetivo', objetivo)
        $http.post(API_URL + '/historico_objetivo', objetivo)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      };

      service.buscarObjetivos = function(id_aluno, callback) {
        $http.get(API_URL + '/historico_objetivo/' + id_aluno)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };


  });
