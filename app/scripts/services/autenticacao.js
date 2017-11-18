'use strict';

/**
 * @ngdoc service
 * @name gainApp.autenticacao
 * @description
 * # autenticacao
 * Service in the gainApp.
 */
angular.module('gainApp')
  .service('Authentication', function ($rootScope, $http, $localStorage, $facebook) {
    var service = this;
    const API_URL = 'https://gainweb.herokuapp.com/api/v1';
    this.login = function(usuario, password, callback) {
      $http.post(API_URL + '/autenticacao',
        [usuario, password],
        { 'Content-Type': 'application/json' }
      ).then(function(response) {
        console.log('LOGIN NORMAL');
        $localStorage.loggedInUser = response.data;
        callback(null, response.data);
      }, function(error){
        console.error(error);
        callback('Usuário não encontrado.', null);
      });
    };
    this.loginFacebook = function(id, callback) {
      $http.post(API_URL +  '/authFacebook', id)
      .then(function(response) {
        $localStorage.loggedInUser = response.data;
        callback(null, response.data);
      }, function(err) {
        console.log('Error', err);
        callback(err, null);
      });
    };
    this.logout = function(callback) {
      $facebook.logout()
      .then(function() {
        $localStorage.$reset();
        callback();
      });
      $localStorage.$reset();
      callback();
    };
    this.getLoggedInUser = function(callback) {
      return callback($localStorage.loggedInUser);
    };
    this.isLoggedIn = function() {
      return service.getLoggedInUser(function(data){
        return !!data;
      });
    };
    this.me = function(callback) {
      if($localStorage.loggedInUser.tipo === 'A') {
        $http.get(API_URL + '/alunoLogado/' + $localStorage.loggedInUser.id)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
          console.warn(error);
        });
      } else {
        $http.get(API_URL + '/professorLogado/' + $localStorage.loggedInUser.id)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
          console.warn(error);
        });
      }
    };
  });
