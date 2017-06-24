exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('exercicio', (table) => {
    table.increments('id').primary();
    table.string('nome_exercicio').notNullable();
    table.integer('repeticoes').notNullable();

  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('exercicio');
};
