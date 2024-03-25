var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '31102002',
        database : 'opt120'
    }
});

module.exports = knex;