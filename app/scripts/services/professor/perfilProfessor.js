'use strict';

angular.module('gainApp')
  .service('perfilP', function ($http) {
      var service = this;
      const API_URL = 'https://gainweb.herokuapp.com/api/v1';

      service.getPerfil = function(id_Professor, callback) {
        $http.get(API_URL + '/professoresUsuario/'+id_Professor)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      service.updatePerfil = function(professor, callback) {
        $http.put(API_URL + '/professores/'+professor.id, professor)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };



  });
