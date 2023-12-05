const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dvdrental',
    port: 5432,
    password: '123'
})

module.exports = pool