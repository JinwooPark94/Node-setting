const router = require('express').Router();
// const mysql = require('mysql');
// const db_config = require('../config/dbconfig.json');

// const connection = mysql.createConnection({
//     host: db_config.host,
//     user: db_config.user,
//     port: db_config.port,
//     password: db_config.password,
//     database: db_config.database
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('mysql connect completed');
// });

router.post('/gettoken', function (req, res) {
    console.log('들어옴');
    // const id = req.body.id;
    // const password = req.body.password;

    res.send('하이');

    // connection.query(`SELECT * FROM member WHERE id = ?`, [id], function (error, results, fields) {
    //   if (error) {
    //     res.send({
    //       "code": 400,
    //       "failed": "서버에 에러 발생하였습니다."
    //     })
    //   } else {
    //     if (results.length > 0) {
    //       if (results[0].password === password) {
    //         res.send({
    //           "code": 200,
    //           "success": "로그인 성공"
    //         });
    //       }
    // else {
    //   res.send({
    //     "code": 204,
    //     "success": "아이디와 비밀번호가 맞지 않습니다."
    //   });
    // }
    //     }
    //   }

    // });

    // jwt.verify(req.token, 'secretkey', (err, authData) => {
    //   if(err) {
    //     res.sendStatus(403);
    //   } else {
    //     res.json({
    //       message: 'Token created',
    //       authData
    //     })
    //   }
    // })

    // const user = {
    //   id: 1
    // }
    // connection.query('SELECT * from member', function (err, rows) {
    //   if (err) throw err;

    //   console.log('The solution is: ', rows);
    //   res.send(rows);
    // });
});

function verifyToken(req, res) {
    const guardHeader = req.headers['authorization'];

    if (typeof guardHeader !== 'undefiend') {

        const Guard = guardHeader.split(' ');
        const GuardToken = Guard[1];

        req.token = GuardToken;

        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;