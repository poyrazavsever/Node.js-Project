const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database: 'node-app',
    password:'Sereza23,'
})


module.exports = connection.promise();