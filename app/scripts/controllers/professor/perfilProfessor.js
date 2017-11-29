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
    $scope.showDieta = false;
    $scope.modeldieta = {};

    $scope.editorOptions = {
      language: 'pt-br',
      'skin': 'moono',
      toolbar: 'full',
      toolbar_full: [
      { name: 'clipboard', items : [ 'Source','Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
      { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
      '/',
      { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
      { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote',
      '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock', 'Image'] },
      '/',
      { name: 'styles', items : [ 'Format','Font','FontSize' ] },
      ]
      };

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
      if($scope.showMeEditar === true || $scope.showMeTreinoP === true || $scope.showMeEditarPerfil === true || $scope.showDieta === true){
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
        $scope.showMeEditar = false;
        $scope.showMeTreinoP = false;
        $scope.showMeEditarPerfil = false;
        $scope.showDieta = false;
      }else{
        $scope.showMeNewTreino = !$scope.showMeNewTreino;
      }
    };
    $scope.TreinoP = function() {
      if($scope.showMeEditar === true || $scope.showMeNewTreino === true || $scope.showMeEditarPerfil === true || $scope.showDieta === true){
        $scope.showMeTreinoP = !$scope.showMeTreinoP;
        $scope.showMeEditar = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditarPerfil = false;
        $scope.showDieta = false;
      }else{
      $scope.showMeTreinoP = !$scope.showMeTreinoP;
    }
    };
    $scope.Editar = function() {
      if($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditarPerfil === true || $scope.showDieta === true){
        $scope.showMeEditar = !$scope.showMeEditar;
        $scope.showMeTreinoP = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditarPerfil =false;
        $scope.showDieta = false;
      }else{
      $scope.showMeEditar = !$scope.showMeEditar;
      }
    };
    $scope.EditarPerfil = function(){
      if($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditar === true || $scope.showDieta === true){
        $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
        $scope.showMeTreinoP = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditar = false;
        $scope.showDieta = false;
      }else{
      $scope.showMeEditarPerfil = !$scope.showMeEditarPerfil;
      }
    };
    $scope.AnexoTreino = function(){
      $scope.showAlunos = !$scope.showAlunos;
      // $scope.showMeAnexoTreinoAluno = $scope.showMeAnexoTreinoAluno;

    };

    $scope.ShowDieta = function(){
      if($scope.showMeTreinoP === true || $scope.showMeNewTreino === true || $scope.showMeEditar === true || $scope.showMeEditarPerfil === true){
        $scope.showDieta = !$scope.showDieta;
        $scope.showMeTreinoP = false;
        $scope.showMeNewTreino = false;
        $scope.showMeEditar = false;
        $scope.showMeEditarPerfil = false;
      }else{
      $scope.showDieta = !$scope.showDieta;
}
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
          $scope.showMeEditarPerfil = null;
        });
      };


    $scope.anexarTreino = function() {
      console.log($scope.model.treinoSelecionado);
      console.log($scope.model.alunoSelecionado);
      profTreino.anexarTreino($scope.model.treinoSelecionado.id, $scope.model.alunoSelecionado.id, function(error, treinoAnexado) {
        if(error) return console.warn(error);
        console.log(treinoAnexado);
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
      console.log('moidel', $scope.model)
      console.log('exer', $scope.exercicios)
      $scope.model.exercicios.push({});
    }

    // $scope.atualizarTreino = function() {
    //   del(treino) {
    //     create(treino) {
    //       criarExercicios(exercicio) {
    //
    //       }
    //     }
    //   }
    // };
    $scope.anexarDieta = function() {
      profTreino.criarDietaPorProfessor($scope.dieta, $scope.model.alunoSelecionado.id, function(error, dietaAnexada){
        if(error) return console.warn(error);
        // var idDieta = dieta[0].id;

      //   profTreino.associarDietaAoAluno(idDieta, id_aluno, function(err, res){
      //     if(err) return console.warn(err);
      //     console.log('Dieta associada ao aluno!');
        $window.alert('Dieta Anexada');
        $scope.dieta = {}
        $scope.model.alunoSelecionado= {}
      // });
    });
  }


    $scope.associarTreinoExercicio = function() {
      profTreino.criarTreino($scope.model.treino.nome, function(err, treino) {
        if(err) return console.warn(err);
        // Cria o treino e retorna o id graças ao returning("*")
        // o var idTreino é o retorno de sucesso da API.
        var idTreino = treino[0].id;

        _.each($scope.model.exercicios, function(exercicio) {
          profTreino.criarExercicio(exercicio, function(err, exercicioCriado) {
            if(err) return console.warn(err);
            // pra cada exercicio criado ele  retorna o idExercicio graças ao returning("*")
            var idExercicio = exercicioCriado[0].id;
            console.log('Exercicio criado com sucesso', idExercicio);


            // Dnetro desse mesmo laço... ele vincula pegando o dado do retorno da API de criação do treino e exercício comentado la em cima
            // e pra cada exercicio que ele criar ele pega o idTreino e o idEXercicio e cria a realação no treino_exercicio...
            profTreino.associarTreinoExercicio(idTreino, idExercicio, function(err, res) {
              if(err) return console.warn(err);
              $window.alert('Treino associado com sucesso!');
              console.log('Treino associado com sucesso', res);
            });

          });
        });
      });
    };

    $scope.adicionarExercicioTreino = function() {
      _.each($scope.model.exercicios, function(exercicio) {
        profTreino.criarExercicio(exercicio, function(err, exercicioCriado) {
          if(err) return console.warn(err);
          var idExercicio = exercicioCriado[0].id;
          console.log('Exercicio criado com scesso', idExercicio);
          profTreino.associarTreinoExercicio($scope.model.treinoSelecionado.id, idExercicio, function(err, res) {
            if(err) return console.warn(err);
            console.log('Exercício Inserido com sucesso!', res);
            $window.alert('Exercício Inserido com sucesso!');
          });

        });
      });
    }





    $scope.showMeEditar = $scope.showMeEditar;
    $scope.showMeTreinoPronto = $scope.showMeTreinoPronto;
    $scope.showMeNewTreino = $scope.showMeNewTreino;
    $scope.showMeEditarPerfil = $scope.showMeEditarPerfil;
    $scope.showMeAnexoTreinoAluno = !$scope.showMeAnexoTreinoAluno;
    $scope.formularioexercicio = !$scope.formularioexercicio;
    $scope.mostrarPlus1 = $scope.mostrarPlus1;
    $scope.showDieta = $scope.showDieta;

    $scope.init();
  });
