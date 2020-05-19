var mysql = require('mysql');


// variables
var db_name = process.env.RDS_DB_NAME || 'test';
var db_host = process.env.RDS_HOSTNAME || 'localhost';
var db_user = process.env.RDS_USERNAME || 'admin';
var db_password = process.env.RDS_PASSWORD || 'password';
var db_port = process.env.RDS_PORT || 3306;

// creating a database connection
var connection = mysql.createConnection({
      host: db_host,
      port: db_port,
      user: db_user,
      password: db_password,
      database: db_name
});

try {
    connection.connect();
    console.log("db connected")
} catch (error) {
    console.log(error)
}

module.exports = {
    connection : connection
};
