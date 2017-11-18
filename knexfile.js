module.exports = {
  development: {
    client: 'pg',
    debug: false,
    connection: {
      // debug: true,
      pool: {max: 1, min: 1},
      host : 'localhost',
      port: 5432,
      user : 'postgres',
      database : 'gain',
      password : '123'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'pg',
    connection: {
      // debug: true,
      pool: {max: 1, min: 1},
      host : 'ec2-23-21-197-231.compute-1.amazonaws.com',
      port: 5432,
      user : 'hdqxbljmpdqtqn',
      database : 'df63hsevpq96d0',
      password : 'c4cd7c22b0e3c79209434eb92d6986fe65f935def50d231b45aa75240b151a36',
      ssl: true
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
