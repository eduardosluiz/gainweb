exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('treino_exercicio', (table) => {
    table.increments('id').primary();
    table.integer('id_treino').references('treino.id');
    table.integer('id_exercicio').references('exercicio.id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('treino_exercicio');
};
