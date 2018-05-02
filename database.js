
// Mysql 및 Mysql config 설정
const mysql = require('mysql');
const db_config = require('./config/dbconfig.json');

const connection = mysql.createConnection({
  host: db_config.host,
  user: db_config.user,
  port: db_config.port,
  password: db_config.password,
  database: db_config.database
});

// Mysql 연결 체크
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('mysql connect completed');
});

module.exports = connection;