'use strict';

angular.module('gainApp')
  .service('profTreino', function ($http) {
      var service = this;
      const API_URL = 'http://localhost:4002/api/v1';

      service.getExercicios = function(id_treino, callback) {
        $http.get(API_URL + '/treinos/' + id_treino + '/exercicios')
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      // service.postTreino = function(treino, callback) {
      //   $http.post(API_URL + '/treinos/', treino)
      //   .then(function(response) {
      //     callback(null, response.data);
      //   }, function(error) {
      //     callback(error, null);
      //   });
      // };

  });
