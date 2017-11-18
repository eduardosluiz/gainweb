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
    'ngCkeditor',
    'ngFacebook',
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
      .when('/aluno/dietas/:id', {
        templateUrl: 'views/aluno/editDieta.html',
        controller: 'editDietaCtrl',
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
        controller: 'RankingCtrl',
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
  .config( function( $facebookProvider ) {
    $facebookProvider.setAppId('1845913872405179');
  })
  .run(function($rootScope, $location, Authentication, $route) {
    (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script');
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }())
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

// router.post('/upload', function(req, res){
//   console.log(red,body);
//   console.log(req,files);
//   res.json({success: true});

// });
