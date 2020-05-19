const { DB_PASSWORD } = require('./../config');

module.exports = {
    db_name: process.env.RDS_DB_NAME || 'demo_db',
    db_host: process.env.RDS_HOSTNAME || 'localhost',
    db_user: process.env.RDS_USERNAME || 'admin',
    db_password: process.env.RDS_PASSWORD || DB_PASSWORD,
    db_port: process.env.RDS_PORT || 3306,
};
