exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('historico_objetivo', (table) => {
    table.increments('id').primary();
    table.string('objetivo').notNullable();
    table.timestamp('data');
    table.integer('id_aluno').notNullable();
    table.timestamp('criado_em').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('historico_objetivo');
};
