const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'gf4pg.myd.infomaniak.com',
    user: 'gf4pg_admin_1',
    password: 'Zxq_PZUhwM0',
    database: 'gf4pg_tierlist'
})

module.exports = db;
export default db