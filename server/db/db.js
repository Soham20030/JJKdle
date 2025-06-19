const {Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'jjkdle',
    password: 'Somsid@2014',
    port: 5432,
});


module.exports = pool;