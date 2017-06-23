var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.PORT || 4002;
var knex = require('./db');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Location, Authorization');
  res.setHeader('Access-Control-Expose-Headers', 'Location');
  next();
});

app.get('/health', function(req, res) {
  res.send('Bem vindo ao gainweb');
});

app.get('/api/v1/alunos', function(req, res) {
  knex.select("*").from("aluno")
    .then(function(alunos) {
      console.log(alunos);
      res.json(alunos);
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.get('/api/v1/alunos/:id', function(req, res, next) {
  var id = req.params.id;
  knex.select("*").from('aluno').where({
      id: id
    })
    .then(function(aluno) {
      res.json(aluno);
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.post('/api/v1/alunos', function(req, res) {
  var aluno = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  };
  knex.insert(aluno).into('aluno').returning('*')
    .then(function(aluno) {
      res.status(201).json(aluno);
    });
});
app.put('/api/v1/alunos/:id', function(req, res) {
  var id = req.params.id;
  knex('aluno').where({
      id: id
    }).update(req.body)
    .then(function(aluno) {
      res.status(204).json(aluno);
    });
});
app.delete('/api/v1/alunos/:id', function(req, res) {
  var id = req.params.id;
  knex('aluno').where({
      id: id
    }).del()
    .then(function(aluno) {
      res.status(204).json();
    });
});


app.get('/api/v1/professores', function(req, res) {
  knex.select("*").from("professor")
    .then(function(professores) {
      console.log(professores);
      res.json(professores);
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.get('/api/v1/professores/:id', function(req, res, next) {
  var id = req.params.id;
  knex.select("*").from('professor').where({
      id: id
    })
    .then(function(professor) {
      res.json(professor);
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.post('/api/v1/professores', function(req, res) {
  var professor = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  };
  knex.insert(professor).into('professor').returning('*')
    .then(function(professor) {
      res.status(201).json(professor);
    });
});
app.put('/api/v1/professores/:id', function(req, res) {
  var id = req.params.id;
  knex('professor').where({
      id: id
    }).update(req.body)
    .then(function(professor) {
      res.status(204).json(professor);
    });
});
app.delete('/api/v1/professores/:id', function(req, res) {
  var id = req.params.id;
  knex('professor').where({
      id: id
    }).del()
    .then(function(professor) {
      res.status(204).json();
    });
});
app.get('/api/v1/treinos', function(req, res) {
  knex.select("*").from("treino")
    .then(function(treinos) {
      console.log(treinos);
      res.json(treinos);
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.get('/api/v1/exercicios', function(req,res){
knex.raw('SELECT * FROM exercicios WHERE id_aluno = ? AND id_treino = ?', [req.params.id_aluno, req.params.id_treino])
.then(function() {
  console.log(exercicios);
  res.json(exercicios);
  })
  .catch(function(error) {
    console.log(error);
  });
})

// app.get('/api/v1/exercicios', function(req, res) {
//   knex.select("*").from("exercicio")
//     .then(function(exercicios) {
//       console.log(exercicios);
//       res.json(exercicios);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
// app.get('/api/v1/alunoTreino:id', function(req, res) {
//   var id = req.params.id;
//   knex.select("*").from('aluno_treino').where({
//       id_aluno: id
//     })
//     .then(function(aluno_treino) {
//       console.log(aluno_treino.id);
//       knex.raw('SELECT * FROM exercicio WHERE id_treino = 2;')
//       .then(function(exercicio){
//         console.log("Exercicios: "+exercicio.nome_exercicio);
//         res.json(id.rows);
//       }).catch(function(err) {
//         console.log(err);
//       });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   });
app.listen(port);
