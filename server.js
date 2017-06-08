var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.PORT || 4002;
var knex  = require('./db');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(function (req, res, next) {
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
  knex.select("*").from('aluno').where({id: id})
  .then(function(aluno) {
    res.json(aluno); 
    })
  .catch(function(error){
console.log(error);
  });
});
app.post('/api/v1/alunos', function(req,res) {
  var aluno = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  };
  knex.insert(aluno).into('aluno').returning('*')
  .then(function(aluno){
    res.status(201).json(aluno);
  });
});
app.put('/api/v1/alunos/:id', function(req,res) {
  var id = req.params.id;
  knex('aluno').where({id: id}).update(req.body)
  .then(function(aluno) {
    res.status(204).json(aluno);
  });
});
app.delete('/api/v1/alunos/:id', function(req,res) {
  var id = req.params.id;
  knex('aluno').where({id: id}).del()
  .then(function(aluno) {
    res.status(204).json();
  });
});

app.listen(port);
