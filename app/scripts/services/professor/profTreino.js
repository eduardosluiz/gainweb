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

      service.anexarTreino = function(id_treino, id_aluno, callback) {
        $http.post(API_URL + '/aluno/' + id_aluno + '/treino/' + id_treino)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      service.atualizaTreino = function(exercicios, callback) {
        $http.put(API_URL + '/exercicios/',exercicios)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };

      service.deleteExercicio = function(id, callback) {
        $http.delete(API_URL + '/treinos/exercicios/' + id)
        .then(function(response) {
          callback(null, response.data);
        }, function(error) {
          callback(error, null);
        });
      };


      service.criarTreino = function(nome_treino, callback) {
        var treino = {
          nome_treino: nome_treino
        };
        
        $http.post(API_URL + '/treinos', treino)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      };

      service.criarExercicio = function(exercicio, callback) {
        $http.post(API_URL + '/exercicios', exercicio)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      };

      service.associarTreinoExercicio = function(idTreino, idExercicio, callback) {
        $http.post(API_URL + '/treinos/' + idTreino + '/exercicios/' + idExercicio)
        .then(function(response) {
          callback(null, response.data);
        }, function(err) {
          callback(err, null);
        });
      };

  });
