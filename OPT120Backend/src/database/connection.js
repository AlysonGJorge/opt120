var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',
        port: 3306,
        password : '311020021944aA@',
        database : 'opt120'
    }
});

module.exports = knex;