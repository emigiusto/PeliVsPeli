var mysql = require('mysql');

var connection = mysql.createConnection({
  host : "localhost",
  port     : '3306',
  user     : "root",
  password :'37075678',
  database : "competencias"
});

module.exports = connection;