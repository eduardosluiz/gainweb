'use strict';

angular.module('gainApp')
  .service('professorServ', function ($http) {
    var service = this;
    const API_URL = 'https://gainweb.herokuapp.com/api/v1';

    this.all = function(callback) {
      //  autenticacao.me(function(error, data) {
        //  var userId = data[0].id;
          $http.get(API_URL + '/professores')
          .then(function(response) {
            callback(null, response.data);
          }, function(error) {
            callback(error, null);
          });
      //  });
      };

      this.get = function(id, callback) {
        $http.get(API_URL + '/Professor/' + id)
        .then(function(response) {
          callback(null, response.data[0]);
        }, function(error) {
          callback(error, null);
        });
      };

      this.create = function(object, callback) {
        autenticacao.me(function(error, data) {
          var userId = data[0].id;
          var professor = {
            nome: object.nome,
            telefone: object.telefone,
            email: object.email,
          };
          $http.post(API_URL + '/professor/', professor)
          .then(function(response) {
            callback(null, response.data);
          }, function(error) {
            callback(error, null);
          });
        });
      };

      this.update = function(professor, callback) {
        $http.put(API_URL + '/professor/' + professor.id, professor)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      this.excluir = function(idProfessor, callback) {
        $http.delete(API_URL + '/professor/' + idProfessor)
        .then(function(response) {
          callback(null, response);
        }, function(error) {
          callback(error, null);
        });
      };
    });
