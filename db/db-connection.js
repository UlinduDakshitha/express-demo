const mysql=require('mysql2')

// MySQL connection
let connection;

function connectToDatabase() {
    if(!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Ulindu@123',
            database: 'express'
        });
    }
    return connection;
}
module.exports = connectToDatabase();