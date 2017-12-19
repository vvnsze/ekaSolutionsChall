
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username');
        table.string('password');
        table.string('email');
    }),

    knex.schema.createTable('userInfos', function(table){
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.string('telephone');
        table.integer('user_id')
             .references('id')
             .inTable('users');
    }),

    knex.schema.createTable('addresses', function(table){
        table.increments('id').primary();
        table.string('body');
        table.integer('user_id')
             .references('id')
             .inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('userInfos'),
    knex.schema.dropTable('addresses')
  ])
};
