exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('treino', (table) => {
    table.increments('id').primary();
    table.string('nome_treino').notNullable();
    table.string('gif');
    table.timestamp('criado_em').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('treino');
};
