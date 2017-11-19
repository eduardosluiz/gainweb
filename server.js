var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.PORT || 4002;
var knex = require('./db');
var fs = require('fs');
// var multer = require('multer');

// app.use(multer({dest: './uploads/'}))
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
	knex.raw('SELECT * FROM aluno WHERE id_usuario =  ?', req.params.id)
	.then(function (aluno) {
		res.json(aluno.rows);
	}).catch(function(err) {
		console.log(err);
	});
});

app.get('/api/v1/professorLogado/:id', function(req, res) {
	knex.raw('SELECT * FROM professor WHERE id_usuario =  ?', req.params.id)
	.then(function (professor) {
		res.json(professor.rows);
	}).catch(function(err) {
		console.log(err);
	});
});

app.post('/api/v1/authFacebook', function(req, res, next) {
  knex.select("*").from('usuarios').where({fbid: req.body.id})
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
		tipo: req.body.tipo,
    fbid: req.body.fbid || null
	};
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
app.get('/api/v1/alunosUsuario/:id', function(req, res, next) {
  var id = req.params.id;
  knex.select("*").from('aluno').where({
      id_usuario: id
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
    objetivo: req.body.objetivo,
    id_usuario: req.body.id_usuario
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
app.get('/api/v1/professoresUsuario/:id', function(req, res, next) {
  var id = req.params.id;
  knex.select("*").from('professor').where({
      id_usuario: id
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
    telefone: req.body.telefone,
    id_usuario: req.body.id_usuario
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
//atualiza dados do professor
// app.put('/api/v1/professores/:id', function(req, res){
// var id = req.params.id;
//   var professor = {
//     nome: req.body.nome,
//     email: req.body.email,
//     telefone: req.body.telefone,
//     id_usuario: req.body.id_usuario
// };
// knex.update(professor).into('professor').returning('*')
// .then(function(professor){
//   res.status(201).json(professor);
// });
// });


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
//Perguntar pro Renan... Quero dar um update com elementos novos, ou editando os que ja existem ou excluindo.
// app.put('/api/v1/exercicios', function(req, res) {
// 	var exercicios = req.body;
//   for (i = 0; i < exercicios.length; i++) {
//       knex.raw('UPDATE exercicio SET nome_exercicio = ?, repeticoes = ?, gif = ? WHERE id = ?', [exercicios[i].nome_exercicio, exercicios[i].repeticoes, exercicios[i].gif, exercicios[i].id])
//       .then(function(exercicio) {
//         res.status(200).json(exercicio);
//       });
//     }
//
// });

// app.delete('/api/v1/exercicios/treinos/:id', function(req, res){
//   console.log('ENTROU AQUI')
//   console.log('DELETAR TREINO_EXERCICIO', req.params.id)
//   knex('treino_exercicio').where({id: req.params.id}).del()
// 	.then(function(exercicio) {
// 		res.status(204).json();
// 	});
// 	// var exercicioId = req.params.id_exercicio;
//   // var treinoId = req.params.id_treino;
// 	// knex('treino_exercicio').where({id_treino: treinoId, id_exercicio: exercicioId}).del()
// 	// .then(function(exercicio) {
// 	// 	res.status(204).json();
// 	// });
// });

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
   knex.raw('SELECT te.id, te.id_treino, te.id_exercicio, e.nome_exercicio, e.repeticoes, e.gif FROM treino_exercicio te JOIN treino t ON te.id_treino = t.id JOIN exercicio e ON te.id_exercicio = e.id WHERE te.id_treino =  ?', req.params.id_treino)
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

// app.post('/api/v1/treinos', function(req, res) {
//   var treino = {
//     nome: req.body.nome,
//     email: req.body.email,
//     telefone: req.body.telefone,
//     id_usuario: req.body.id_usuario
//   };
//   knex.insert(professor).into('professor').returning('*')
//     .then(function(professor) {
//       res.status(201).json(professor);
//     });
// });

app.get('/api/v1/treinos', function(req, res){
 knex.raw("SELECT * FROM treino")
 .then(function (treinos) {
   res.json(treinos.rows);
 }).catch(function(err) {
   console.log(err);
 });
});

app.post('/api/v1/aluno/:id_aluno/treino/:id_treino', function(req, res) {
  var aluno_treino = {
    id_treino: req.params.id_treino,
    id_aluno: req.params.id_aluno
  };
  knex.insert(aluno_treino).into('aluno_treino').returning('*')
  .then(function(aluno_treino) {
    res.status(201).json(aluno_treino);
  });
});

app.get('/api/v1/alunos/:id_aluno/dietas', function(req, res) {
  knex.select("*").from('dieta').where({id_aluno: req.params.id_aluno})
  .then(function(dietas) {
    res.json(dietas);
  })
  .catch(function(error) {
    console.log(error);
  });
});

app.get('/api/v1/dietas/:id', function(req, res, next) {
	var id = req.params.id;
	knex.select("*").from('dieta').where({id: id})
	.then(function(dieta) {
		res.json(dieta);
	});
});

app.post('/api/v1/alunos/:id_aluno/dietas', function(req, res) {
  var dieta = {
    id_aluno: req.params.id_aluno,
    nome_dieta: req.body.nome_dieta,
    conteudo: req.body.corpoDieta
  }
  knex.insert(dieta).into('dieta').returning("*")
  .then(function(dieta) {
    res.status(201).json(dieta)
  })
  .catch(function(error) {
    console.log(error)
  });
});

app.put('/api/v1/dietas/:id', function(req, res) {
  var id = req.params.id;
	knex('dieta').where({id: id}).update(req.body).then(function(dieta) {
		res.status(204).json(dieta);
	});
});

app.delete('/api/v1/dietas/:id', function(req, res){
	var id = req.params.id;
	knex('dieta').where({id: id}).del()
	.then(function(dieta) {
		res.status(204).json();
	});
});

app.get('/api/v1/ranking', function(req, res) {
  knex.raw("SELECT id, objetivo, pontos, nome FROM aluno")
  .then(function(ranking) {
    res.json(ranking.rows);
  });
});

app.put('/api/v1/alunos/:id/ranking', function(req, res) {
  var id = req.params.id;
	knex('aluno').where({id: id}).update(req.body)
  .then(function(ranking) {
		res.status(204).json(ranking);
	});
});

app.delete('/api/v1/treinos/exercicios/:id', function(req, res){
	var id = req.params.id;
	knex('treino_exercicio').where({id: id}).del()
  .then(function(treino_exercicio) {
		res.status(204).json();
	});
});

app.post('/api/v1/treinos', function(req, res) {
  knex.insert(req.body).into('treino').returning('*')
  .then(function(treino) {
    res.status(201).json(treino)
  });
});

app.post('/api/v1/exercicios', function(req, res) {
  knex.insert(req.body).into('exercicio').returning('*')
  .then(function(treino) {
    res.status(201).json(treino)
  });
});

app.post('/api/v1/treinos/:id_treino/exercicios/:id_exercicio', function(req, res) {
  var treino_exercicio = {
    id_treino: req.params.id_treino,
    id_exercicio: req.params.id_exercicio
  };

  knex.insert(treino_exercicio).into('treino_exercicio').returning('*')
  .then(function(treino) {
    res.status(201).json(treino)
  });
});

app.put('/api/v1/treinos/exercicios/:id', function(req, res) {
  var id = req.params.id;

  knex('treino_exercicio').where({ id: id }).update(req.body)
    .then(function(treino_exercicio) {
      res.status(204).json(treino_exercicio);
    });
});

app.put('/api/v1/exercicios/:id', function(req, res) {
  knex('exercicio').where({ id: id }).update(req.body)
    .then(function(exercicio) {
      res.status(204).json(exercicio);
    });
});

app.post('/api/v1/historico_objetivo', function(req, res) {
  var historico_objetivo = {
    id_aluno: req.body.id_aluno,
    objetivo: req.body.objetivo,
    data: req.body.data
  };

  knex.insert(historico_objetivo).into('historico_objetivo')
  .then(function(historico) {
    res.status(201).json(historico);
  })
  .catch(function(err) {
    console.warn(err);
  });
});

app.get('/api/v1/historico_objetivo/:id_aluno', function(req, res) {
  knex('historico_objetivo').where({id_aluno: req.params.id_aluno})
  .then(function(historico) {
    res.json(historico);
  })
  .catch(function(err) {
    console.log(err);
  })
});


app.listen(port);
