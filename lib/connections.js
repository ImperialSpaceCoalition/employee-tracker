const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost', //  database host
  user: 'root', //  database username
  password: 'Bean0620!', //  database password
  database: 'employeetracker_db', //  database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
