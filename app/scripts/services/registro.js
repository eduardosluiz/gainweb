'use strict';

/**
 * @ngdoc service
 * @name gainApp.registrando
 * @description
 * # estabelecimentos
 * Service in the gainApp.
 */
angular.module('gainApp')
  .service('Register', function ($http, _) {
    var service = this;
    const API_URL = 'https://gainweb.herokuapp.com/api/v1';

    this.usuario = function(usuario, callback) {
      $http.post(API_URL + '/register', usuario)
      .then(function(response) {
        callback(null, response.data[0]);
      }, function(error) {
        callback(error, null);
      });
    };

    this.aluno = function(aluno, callback) {
      $http.post(API_URL + '/alunos', aluno)
      .then(function(response) {
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };

    this.professor = function(professor, callback) {
      $http.post(API_URL + '/professores', professor)
      .then(function(response) {
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };

  });
