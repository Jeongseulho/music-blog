const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bbs',
});

const corsOptions = {
  origin: '*', // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.get('/list', (req, res) => {
  const sqlQuery = 'SELECT *FROM BOARD;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
