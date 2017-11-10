'use strict';

/**
 * @ngdoc function
 * @name gainApp.controller:perfilProfessorCtrl
 * @description
 * # MainCtrl
 * Controller of the gainApp
 */
angular.module('gainApp')
  .controller('perfilProfessorCtrl', function($scope, $http, Alunos, Treinos, $window, perfilP, Authentication, profTreino, _) {

    //$scope.exercicios = [];
    $scope.aluno_treino = [];
    $scope.showMeEditar = false;
    $scope.showMeTreinoP = false;
    $scope.showMeNewTreino = false;
    $scope.showMeNewExercicio = false;
    $scope.showMeEditarPerfil = false;
    $scope.showMeAnexoTreinoAluno = false;
    $scope.ShowAlunos = true;
    $scope.treinos = [];
    $scope.ProfessorAtualizado = [];
    $scope.alunos = [];
    $scope.formularioexercicio = false;
    $scope.mostrarPlus1 = false;
    $scope.newTreinoExercicios = [];
    $scope.ver = [];
    $scope.model = {};


    $scope.model.treino = {};
    $scope.model.exercicio = {};
    $scope.model.exercicios = [];

    // $scope.init = function() {
    //   Professor.all(function(error, professores) {
    //     if (error) return console.warn(error);
    //     $scope.professor = professores;
    //   });
    // };
    $scope.init = function() {
      Authentication.getLoggedInUser(function(user) {
        $scope.user = user;

        Alunos.all(function(error, alunos) {
          if (error) return console.warn(error);
          $scope.alunos = alunos;
        });

        //aqui eu faço uma requisição pro banco e associo o retorno dela pra um variavel no scope
        console.log('VARIAVEL ASSOCIADA $scope.user', $scope.user);
        perfilP.getPerfil($scope.user.id, function (error, professor){
          console.log($scope.user.id);
          if(error) return console.warn(error);
          $scope.professor = professor[0];
          console.log($scope.professor);
        });
      });
    };

    Treinos.getTreinos(function(error, treinos) {
      if(error) return console.warn(error);
      $scope.treinos = treinos;
    });

//get perfil professor ( verificar )


    $scope.newTreino = function() {
      if($scope.showMeEditar === true || $scope.showMeTreinoP === true || $scope.showMeEditarPerfil === true){
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
        $scope.showMeEditar = false;
        $scope.showMeTreinoP = false;
        $scope.showMeEditarPerfil = false;
      }else{
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
      }
    };
    $scope.TreinoP = function() {
      if($scope.showMeEditar === true || $scope.showMeNewTreino === true || $scope.showMeEditarPerfil === true){
        $scope.showMeTreinoP = !$scope.showMeTreinoP;
        $scope.showMeEditar = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditarPerfil = false;
      }else{
      $scope.showMeTreinoP = !$scope.showMeTreinoP;
    }
    };
    $scope.Editar = function() {
      if($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditarPerfil === true){
        $scope.showMeEditar = !$scope.showMeEditar;
        $scope.showMeTreinoP = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditarPerfil =false;
      }else{
      $scope.showMeEditar = !$scope.showMeEditar;
      }
    };
    $scope.EditarPerfil = function(){
      if($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditar === true){
        $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
        $scope.showMeTreinoP = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditar = false;
      }else{
      $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
      }
    };
    $scope.AnexoTreino = function(){
      $scope.showAlunos = !$scope.showAlunos;
      // $scope.showMeAnexoTreinoAluno = $scope.showMeAnexoTreinoAluno;

    };
    $scope.ShowAlunos = function(){
      $scope.showAlunos = $scope.showAlunos;
    }

    $scope.MostrarFormulario = function(){
      $scope.formularioexercicio = !$scope.formularioexercicio;
    }

    $scope.MostrarPlus = function(){
      $scope.mostrarPlus1 = !$scope.mostrarPlus1;
    }

    $scope.ExerciciosNoTreinoNovo = function(){
      var aux = {nome: "", repeticoes: 0};
      $scope.newTreinoExercicios.push(aux);
      console.log($scope.newTreinoExercicios);

    }
    $scope.ExerciciosNoTreinoRemove = function(exercicio){
      var indiceDoCap = $scope.newTreinoExercicios.indexOf(exercicio);
       if (indiceDoCap > -1) {
       $scope.newTreinoExercicios.splice(indiceDoCap, 1);
       };
      console.log(indiceDoCap);

    }


    $scope.newExercicio = function() {
      $scope.showMeNewExercicio = true;
      // $scope.exercicios.push({nome: null, repeticoes: null});
    };
    // $scope.carregarTreinos = function() {
    //   Alunos.getTreinos($scope.alunoSelecionado.id, function(error, treinos) {
    //     if(error) return console.warn(error);
    //     $scope.treinos = treinos;
    //   });
    // };

    $scope.editarExercicio = function(exercicios){
      profTreino.atualizaTreino(exercicios, function(error) {
        if(error) return console.warn(error);
      });
    };

    $scope.excluiExercicio = function(index, id){
       profTreino.deleteExercicio(id, function(error) {
         $scope.exercicios.splice(index, 1);
         if(error) return console.warn(error);
       });
    };

    $scope.carregarExercicios = function(treinoSelecionado) {
      Treinos.getExercicios(treinoSelecionado.id, function(error, exercicios) {
        if(error) return console.warn(error);
        $scope.exercicios = exercicios;
      })
    };

    $scope.cadastraTreino = function (){
      var novoTreino = {
        nome: $scope.treino.nome_treino,
        exercicio: $scope.exercicio.exercicio.nome,
        repeticoes: $scope.exercicio.repeticoes,
        gif: $scope.exercicio.gif
    }
  }

    $scope.updatePerfil = function() {
        perfilP.updatePerfil($scope.professor, function(error, professor) {
          if(error) return console.warn(error);
        });
      };


    $scope.anexarTreino = function() {
      // console.log(treinoSelecionado);
      // console.log(alunoSelecionado);
      profTreino.anexarTreino($scope.model.treinoSelecionado.id, $scope.model.alunoSelecionado.id, function(error, treinoAnexado) {
        if(error) return console.warn(error);
        $window.alert('Treino Anexado');
      });
    }

    $scope.limpar = function() {
      if (!$window.confirm('Deseja limpar?')) {
        return;
      };
      $scope.alunoSelecionado = null;
      $scope.treinoSelecionado = null;
      $scope.dadoInserido = null;
    };

    $scope.abrirGif = function(index){
      console.log(index);
      $scope.ver[index] = !$scope.ver[index];
    };

    $scope.criarTreino = function(treino) {
      profTreino.criarTreino(treino, function(err, treino) {
        if(err) return console.warn(err);
      });
    };

    $scope.criarExercicio = function(exercicio) {
      profTreino.criarExercicio(exercicio, function(err, exercicio) {
        if(err) return console.warn(err);
      });
    };

    $scope.addExercicio = function() {
      $scope.model.exercicios.push({});
    }

    $scope.addRow = function() {
      $scope.exercicios.push({});
    }



    $scope.associarTreinoExercicio = function() {
      profTreino.criarTreino($scope.model.treino.nome, function(err, treino) {
        if(err) return console.warn(err);
        var idTreino = treino[0].id;

        _.each($scope.model.exercicios, function(exercicio) {
          profTreino.criarExercicio(exercicio, function(err, exercicioCriado) {
            if(err) return console.warn(err);
            var idExercicio = exercicioCriado[0].id;
            console.log('Exercicio criado com sucesso', idExercicio);

            profTreino.associarTreinoExercicio(idTreino, idExercicio, function(err, res) {
              if(err) return console.warn(err);
              console.log('Treino associado com sucesso', res);
            });

          });
        });
      });
    };





    $scope.showMeEditar = $scope.showMeEditar;
    $scope.showMeTreinoPronto = $scope.showMeTreinoPronto;
    $scope.showMeNewTreino = $scope.showMeNewTreino;
    $scope.showMeEditarPerfil = $scope.showMeEditarPerfil;
    $scope.showMeAnexoTreinoAluno = !$scope.showMeAnexoTreinoAluno;
    $scope.formularioexercicio = !$scope.formularioexercicio;
    $scope.mostrarPlus1 = $scope.mostrarPlus1;

    $scope.init();
  });
