exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('aluno_treino', (table) => {
    table.increments('id').primary();
    table.integer('id_aluno').references('aluno.id');
    table.integer('id_treino').references('treino.id');

  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('aluno_treino');
};
