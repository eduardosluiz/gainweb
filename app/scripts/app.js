'use strict';

/**
 * @ngdoc overview
 * @name gainApp
 * @description
 * # gainApp
 *
 * Main module of the application.
 */
angular
  .module('gainApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        authenticated: true
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/aluno/perfil', {
        templateUrl: 'views/aluno/perfilAluno.html',
        controller: 'perfilAlunoCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/aluno/treinos', {
        templateUrl: 'views/aluno/meustreinos.html',
        controller: 'MeusTreinosCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/aluno/treinos/view/:id', {
        templateUrl: 'views/treinos/meustreinos.html',
        controller: 'treinoViewCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/aluno/dietas', {
        templateUrl: 'views/aluno/dietas.html',
        controller: 'dietasCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/professor/perfil', {
        templateUrl: 'views/professor/perfilProfessor.html',
        controller: 'perfilProfessorCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/professor/alunos', {
        templateUrl: 'views/alunos/index.html',
        controller: 'alunoCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/professor/alunos/view/:id', {
        templateUrl: 'views/alunos/view.html',
        controller: 'alunoViewCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/professor/treinos', {
        templateUrl: 'views/treinos/index.html',
        controller: 'professorTreinoCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/professor/treinos/edit/:id', {
        templateUrl: 'views/treinos/edit.html',
        controller: 'professorTreinoCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/ranking', {
        templateUrl: 'views/ranking.html',
        controller: 'rankingCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'ctrl',
        authenticated: true
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])
  .run(function($rootScope, $location, Authentication, $route) {
    $rootScope.isLoggedIn = function() {
      return Authentication.getLoggedInUser(function(data) {
        return !!data;
      });
    };
    $rootScope.logout = function() {
      Authentication.logout(function(){
        $location.path('/login');
        $route.reload();
      });
    };
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (!$rootScope.isLoggedIn()) {
        if (next.authenticated === true) {
          $location.path('/login');
        }
      } else {
        if (next.templateUrl === 'views/login.html') {
          $location.path('/');
        }
      }
    });
});
