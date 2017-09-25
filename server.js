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

function auth(req, res, next) {
	var authorization = req.headers.authorization;
	if(!authorization) {
		res.sendStatus(401);
		return;
	}
	var parts = authorization.trim().split(' ');

	switch (parts[0]) {
		case 'Basic':
			var secret = new Buffer(parts[1], 'base64').toString();
			var credentials = secret.split(':');

			getUsuarioByCredentials(credentials)
			.then(function(users) {
				if(users.length === 0) {
					res.sendStatus(401);
					return;
				}
				req.user = users[0];
				next();
			}).catch(function(error) {
				console.warn(error);
				res.sendStatus(401);
				return;
			});
			break;
		case 'Token':
			var token = parts[1].split('=')[1];
			getUsuarioByToken(token)
			.then(function(users) {
				if(users.length === 0) {
					res.sendStatus(401);
					return;
				}
				req.user = users[0];
				next();
			}).catch(function(error) {
				console.warn(error);
				res.sendStatus(401);
				return;
			});
			break;
		default:
			res.sendStatus(401);
			return;
	}
};

// Autenticação
app.get('/api/v1/alunoLogado/:id', function(req, res) {
	knex.raw('SELECT * FROM alunos WHERE id_usuario =  ?', req.params.id)
	.then(function (aluno) {
		res.json(alunos.rows);
	}).catch(function(err) {
		console.log(err);
	});
});

app.get('/api/v1/professorLogado/:id', function(req, res) {
	knex.raw('SELECT * FROM professores WHERE id_usuario =  ?', req.params.id)
	.then(function (professor) {
		res.json(professor.rows);
	}).catch(function(err) {
		console.log(err);
	});
});

app.post('/api/v1/autenticacao', function(req, res, next) {
	getUsuarioCredencial(req.body)
	.then(function(users) {
		if(users.length === 0) {
			res.sendStatus(401);
			return;
		}
		req.user = users[0];
		res.send(req.user);
		next();
	}).catch(function(error) {
		console.warn(error);
		res.sendStatus(401);
		return;
	});
});

function getUsuarioCredencial(credencial) {
	return knex.select("*").from('usuarios').where({username: credencial[0], password: credencial[1]});
}

function getUsuarioToken(token) {
	return knex.select("*").from('usuarios').where({token: token});
}

app.post('/api/v1/register', function(req, res) {
	var usuario = {
		username: req.body.username,
		password: req.body.password,
		tipo: req.body.tipo
	};
  console.log(usuario);
	knex.insert(usuario).into('usuarios').returning('*')
	.then(function(usuario) {
		res.status(201).json(usuario);
	});
});

//fim aut


app.get('/health', function(req, res) {
  res.send('Bem vindo ao gainweb');
});

//alunos
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
    telefone: req.body.telefone,
    objetivo: req.body.objetivo
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
// fim alunos
// inicio professores

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
//fim professores

// inicio treino
//busca treino
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
// atualiza treino de um aluno
app.put('/api/v1/alunos/:id/treinos', function(req, res) {
	var id = req.body.id;
	var exercicio = req.body.exercicio;
	knex.raw('UPDATE aluno_treino SET exercicio = ? WHERE id = ?', [exercicio, id])
	.then(function(professor) {
		res.status(200).json(professor);
	});
});



//busca treino por idAluno
 app.get('/api/v1/alunos/:id_aluno/treinos', function(req, res){
   knex.raw('SELECT * FROM aluno_treino at JOIN aluno a ON at.id_aluno = a.id JOIN treino t ON at.id_treino = t.id WHERE a.id = ?', req.params.id_aluno)
   .then(function(treinos) {
     res.json(treinos.rows);
   })
   .catch(function(error) {
     console.log(error);
   });

 });
//busca treino por idTreino
 app.get('/api/v1/treinos/:id_treino/exercicios', function(req, res) {
   knex.raw('SELECT * FROM treino_exercicio te JOIN treino t ON te.id_treino = t.id JOIN exercicio e ON te.id_exercicio = e.id WHERE te.id_treino =  ?', req.params.id_treino)
   .then(function(exercicios) {
     res.json(exercicios.rows);
   })
   .catch(function(error) {
     console.log(error);
   });
 });

 //lista todos os treinos de um aluno
 app.get('/api/v1/alunos/:id/treinos', function(req, res){
	var id_aluno = req.params.id;
	knex.raw("SELECT * FROM aluno_treino atr JOIN treino t ON atr.id_aluno = t.id_aluno JOIN exercicio e ON atr.id_treino = e.id WHERE atr.id_treino = ?", id_aluno)
	.then(function (agendamentos) {
		res.json(agendamentos.rows);
	}).catch(function(err) {
		console.log(err);
	});
});



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
