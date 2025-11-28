const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',   // replace with your MySQL password
  database: 'petfinder_db'
});

connection.connect(err => {
  if(err) throw err;
  console.log('MySQL connected to petfinder_db!');
});

module.exports = connection;
