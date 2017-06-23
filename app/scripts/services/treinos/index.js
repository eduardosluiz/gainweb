'use strict';

angular.module('gainApp')
  .service('Treinos', function ($http) {
      var service = this;
      const API_URL = 'http://localhost:4002/api/v1';
      service.all = function(callback) {
        $http.get(API_URL + '/treinos')
        .then(function(response) {
          console.log('treinos', response.data);
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

  });
