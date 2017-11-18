'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:dietasCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('editDietaCtrl', function($scope, $http, Dietas, $window, $location, $routeParams) {

  $scope.editorOptions = {
    language: 'pt-br',
    'skin': 'moono',
    toolbar: 'full',
    readOnly : true,
    toolbar_full: [
    // { name: 'clipboard', items : [ 'Source','Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    // { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    '/',
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote',
    '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock', 'Image'] },
    '/',
    { name: 'styles', items : [ 'Format','Font','FontSize' ] },
    ]
    };

    $scope.init = function() {
      Dietas.getDieta($routeParams.id, function(error, dieta) {
        if(error) return console.warn(error);
        $scope.dieta = dieta;
        console.log($scope.dieta);
      });
    };

    $scope.voltar = function() {
      $location.path('/aluno/dietas');
    };

    $scope.salvar = function(dieta) {
      Dietas.updateDieta(dieta, function(error, dieta) {
        if(error) return console.warn(error);
        $window.alert('Dieta salva com sucesso');
        $location.path('/aluno/dietas');
      });
    };

    $scope.init();
  });
