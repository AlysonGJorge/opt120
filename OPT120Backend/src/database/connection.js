var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',
        port: 3306,
        password : '31102002',
        database : 'opt120'
    }
});

module.exports = knex;