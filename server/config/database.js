const config = require('../../knexfile.js');
const env = 'development';
const knex  = require('knex')(config[env]);

// const knex = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });

const bookshelf = require('bookshelf')(knex);

module.exports = { knex: knex, bookshelf: bookshelf };
