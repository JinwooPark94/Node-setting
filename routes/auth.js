const router = require('express').Router();

// jwt token
const jwt = require('jsonwebtoken');

const connection = require('../database');

connection.query(`SELECT * FROM member WHERE id = ?`, [id], (error, results, fields) => {
  if (error) {
    res.send({
      code: 400,
      message: '서버에 에러 발생하였습니다.'
    })
  } else {
    if (results.length > 0) {
      if (results[0].password === password) {
        const token = jwt.sign(results[0], config.secret, {
          expiresIn: 1440
        });
        const userId = results[0].id;
        res.send({
          code: 200,
          token: config.secret,
          currUser: userId,
          message: '로그인 성공'
        });
      } else {
        res.send({
          code: 204,
          message: '아이디와 비밀번호가 맞지 않습니다.'
        });
      }
    }
  }
});

module.exports = router;