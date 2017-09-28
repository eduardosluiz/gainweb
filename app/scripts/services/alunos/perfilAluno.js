'use strict';

angular.module('gainApp')
  .service('perfilA', function ($http) {
      var service = this;
      const API_URL = 'http://localhost:4002/api/v1';

      service.getPerfil = function(id_aluno, callback) {
        $http.get(API_URL + '/alunosUsuario/'+id_aluno)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

  });
