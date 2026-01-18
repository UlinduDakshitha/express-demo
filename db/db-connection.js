const mysql=require('mysql2')

// MySQL connection
let connection;

function connectToDatabase() {
    if(!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'acpt',
            database: 'express'
        });
    }
    return connection;
}
module.exports = connectToDatabase();
