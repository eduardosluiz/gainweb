'use strict';

angular.module('gainApp')
  .service('Alunos', function ($http) {
    var service = this;
    const API_URL = 'http://localhost:4002/api/v1';

    service.all = function(callback) {
      $http.get(API_URL + '/alunos')
      .then(function(response) {
        console.log('alunos', response.data);
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };

  });
