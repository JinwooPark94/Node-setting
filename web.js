// Express framework
const express = require('express');

// jwt token
const jwt = require('jsonwebtoken');

// 경로
const path = require('path');

// Post 전송 시 요청 데이터를 추출하게 만들어 주는 미들 웨어
const bodyParser = require('body-parser');

// CORS - HTTP 접근 제어
const cors = require('cors');

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

const app = express();

// 포트 설정
const port = process.env.PORT || '8001';

// 포트 세팅
app.set('port', port);

// CORS 사용
app.use(cors());

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 정적 파일 서비스 설정
app.use(express.static(__dirname + '/public'));

// Mysql 연결 체크
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('mysql connect completed');
});

// 모든 경로로 들어올 시 /public/index.html 보이기
app.get('/[^\.]+$', (req, res) => {
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, '/public/index.html'))
});

// 라우터 설정
app.use('/auth', require('./routes/auth'));
app.use('/place', require('./routes/place'));

app.listen(port, () => console.log("Node app is running at localhost:" + port));