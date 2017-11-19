'use strict';

angular.module('gainApp')
  .service('Dietas', function ($http, Authentication) {
    var service = this;
    const API_URL = 'http://localhost:4002/api/v1';

    service.getDietas = function(callback) {
      Authentication.me(function(error, data) {
        if(error) return console.log(error);
        var userId = data[0].id;
        $http.get(API_URL + '/alunos/' + userId + '/dietas')
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      });
    };

    service.getDieta = function(id, callback) {
      console.log(id);
      $http.get(API_URL + '/dietas/' + id)
      .then(function(response) {
        callback(null, response.data[0]);
      }, function(error) {
        callback(error, null);
      })
    };

    service.updateDieta = function(dieta, callback) {
      $http.put(API_URL + '/dietas/'+ dieta.id, dieta)
      .then(function(response) {
        callback(null, response.data);
      }, function(err) {
        callback(err, null);
      });
    };

    service.createDieta = function(dieta, callback) {
      Authentication.me(function(error, data) {
        var userId = data[0].id
        $http.post(API_URL + '/alunos/' + userId + '/dietas', dieta)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      });
    };

    service.criarDieta = function(dieta, callback) {
      Authentication.me(function(error, data) {
        var userId = data[0].id
        return console.log(dieta)
        $http.post(API_URL + '/alunos/' + userId + '/dietas', dieta)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      });
    };

    service.deleteDieta = function(id, callback) {
      $http.delete(API_URL + '/dietas/'+ id)
      .then(function(response) {
        callback(null, response.data);
      }, function(err) {
        callback(err, null);
      });
    };


    service.uploadFileToUrl = function(file) {
      var fd = new FormData();
      fd.append('file', file);
      return console.log(file)
      $http.post(API_URL + '/arquivos' , fd, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        })
        .success(function() {})
        .error(function() {});
    }

});
