// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'tasks',
      user:     'root',
      password: 'amjuel@13'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
