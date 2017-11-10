exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('dieta', (table) => {
    table.increments('id').primary();
    table.string('nome_dieta').notNullable();
    table.string('conteudo', 10000).notNullable();
    table.integer('id_aluno').references('aluno.id');
    table.timestamp('criado_em').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('dieta');
};
