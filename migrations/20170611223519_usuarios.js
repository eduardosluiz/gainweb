exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('usuarios', (table) => {
    table.increments('id').primary();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.string('tipo').notNullable();
    table.decimal('fbid', 20, 0);
    table.string('token').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('criado_em').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('usuarios');
};
