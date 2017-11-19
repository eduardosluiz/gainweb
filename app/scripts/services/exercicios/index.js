'use strict';

angular.module('gainApp')
  .service('Exercicios', function ($http) {
    var service = this;
    const API_URL = 'https://gainweb.herokuapp.com/api/v1';

    service.all = function(callback) {
      $http.get(API_URL + '/exercicios')
      .then(function(response) {
        console.log('exercicios', response.data);
        callback(null, response.data);
      }, function(error) {
        callback(error, null);
      });
    };

  });
