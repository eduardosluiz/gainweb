SELECT * FROM usuarios
SELECT * FROM aluno
SELECT * FROM treino
SELECT * FROM exercicio
SELECT * FROM professor
SELECT * FROM aluno_treino
SELECT * FROM EXERCICIO
SELECT * FROM TREINO

ALTER TABLE aluno ADD COLUMN pontos int;
update aluno SET pontos = 20 WHERE nome = 'Renan';
update aluno SET pontos = 30 WHERE nome = 'Fernanda'


delete from aluno where nome = 'usuario223';
delete from aluno where nome = 'fg';
delete from usuarios where username = 'miguel'



INSERT INTO usuarios(username, password, tipo) VALUES('eduardo', '123', 'A');
INSERT INTO usuarios(username, password, tipo) VALUES('renan', '123', 'A');
INSERT INTO usuarios(username, password, tipo) VALUES('miguel', '123', 'P');

INSERT INTO aluno(nome, email, telefone, objetivo, id_usuario) VALUES('Eduardo', 'eduardoluizdude@gmail.com', '51999222011', 'H', 1);
INSERT INTO aluno(nome, email, telefone, objetivo, id_usuario) VALUES('Renan', 'renanpadilha94@gmail.com', '51984941322', 'PP', 2);

INSERT INTO treino(nome_treino) VALUES('Costas');
INSERT INTO treino(nome_treino) VALUES('Braço');
INSERT INTO treino(nome_treino) VALUES('Perna');
INSERT INTO treino(nome_treino) VALUES('Peito');
INSERT INTO treino(nome_treino) VALUES('Ombro');

INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Remada Baixa', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Remada Curvada', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Serrote', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Barra Fixa', 12);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Pull-down de pegada fechada', 8);

INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Direta', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Alternada', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca Martelo', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Rosca inclinada com halteres',12);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Bíceps isolado no Scott', 12);

INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Agachamento', 35);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Cadeira Flexora', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Passada', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Leg Press 45° ', 12);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Agachamento no Smith', 12);



INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Supino Reto', 8);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Supino Inclinado', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Crucifixo', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Flexão básica', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Voador no banco inclinado', 15);



INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Elevação Frontal', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Elevação Lateral', 15);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Desenvolvimento', 10);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Desenvolvimento Arnold', 12);
INSERT INTO exercicio(nome_exercicio, repeticoes) VALUES('Crucifixo invertido com halteres', 12);

INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(1, 1, 30);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(1, 5, 10);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(2, 2, 5);
INSERT INTO aluno_treino(id_aluno, id_treino, peso) VALUES(2, 3, 8);


INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 19);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 18);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 1);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 2);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(1, 3);

INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 16);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 17);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 4);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 5);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(2, 6);

INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 7);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 8);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 9);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 20);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(3, 21);


INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 10);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 11);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 12);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 22);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(4, 23);


INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 13);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 14);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 15);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 24);
INSERT INTO treino_exercicio(id_treino, id_exercicio) VALUES(5, 25);
