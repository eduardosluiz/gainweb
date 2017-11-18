'use strict';

angular.module('gainApp')
  .service('Alunos', function ($http) {
    var service = this;
    const API_URL = 'https://gainweb.herokuapp.com/api/v1';

    service.all = function(callback) {
      $http.get(API_URL + '/alunos')
      .then(function(response) {
        console.log('alunos', response.data);
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };


    service.getAluno = function(id, callback) {
          $http.get(API_URL + '/alunos/' + id)
          .then(function(response) {
            console.log('aluno', response.data);
            callback(null, response.data[0]);
          }, function(error) {
            callback(error, null);
          });
        };

    service.getTreinos = function(id_aluno, callback) {
      $http.get(API_URL + '/alunos/' + id_aluno + '/treinos')
      .then(function(response) {
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };

  });
