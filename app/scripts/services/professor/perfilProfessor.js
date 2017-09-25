'use strict';

angular.module('gainApp')
  .service('perfilP', function ($http) {
      var service = this;
      const API_URL = 'http://localhost:4002/api/v1';

      service.getPerfil = function(id_Professor, callback) {
        $http.get(API_URL + '/professor/perfilProfessor')
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

  });
