INSERT INTO usuarios(username, password, tipo) VALUES('eduardo', '123', 'A');
INSERT INTO usuarios(username, password, tipo) VALUES('renan', '123', 'A');

INSERT INTO aluno(nome, email, telefone, endereco, numero, complemento, bairro, id_usuario) VALUES('Eduardo', 'eduardoluizdude@gmail.com', '51999222011', 'Rua Tomaz Flores', '522', '02', 'Bom Fim', 1);
INSERT INTO aluno(nome, email, telefone, endereco, numero, complemento, bairro, id_usuario) VALUES('Renan', 'renanpadilha94@gmail.com', '51984941322', 'Rua Tomaz Flores', '522', '02', 'Bom Fim', 2);

INSERT INTO treino(nome_treino) VALUES('Costas');
INSERT INTO treino(nome_treino) VALUES('Braço');
INSERT INTO treino(nome_treino) VALUES('Perna');
INSERT INTO treino(nome_treino) VALUES('Peito');
INSERT INTO treino(nome_treino) VALUES('Ombro');

INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Remada Baixa', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Remada Curvada', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Serrote', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Direta', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Alternada', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Martelo', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Agachamento', 35);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Cadeira Flexora', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Passada', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Supino Reto', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Supino Inclinado', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Crucifixo', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Elevação Frontal', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Elevação Lateral', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Desenvolvimento', 10);

INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(1, 1, 30);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(1, 5, 10);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(2, 2, 5);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(2, 3, 8);

INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 1);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 2);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 3);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 4);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 5);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 6);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 7);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 8);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 9);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 10);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 11);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 12);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 13);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 14);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 15);
