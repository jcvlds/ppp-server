var mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Create a database connection
var connection = mysql.createConnection({
      host: dbConfig.db_host,
      port: dbConfig.db_port,
      user: dbConfig.db_user,
      password: dbConfig.db_password,
      database: dbConfig.db_name
});


connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to db');
});

module.exports = {
    connection : connection
};
