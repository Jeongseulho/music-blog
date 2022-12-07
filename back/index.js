const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

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
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('success');
});

app.get('/list', (req, res) => {
  const sqlQuery = 'SELECT *FROM POSTINFO;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/post', (req, res) => {
  const songTitle = req.body.songTitle;
  const singer = req.body.singer;
  const content = req.body.content;
  const sqlQuery =
    'INSERT INTO POSTINFO (TITLE, SINGER, CONTENT) VALUES (?,?,?);';
  db.query(sqlQuery, [songTitle, singer, content], (err, result) => {
    res.send(result);
  });
});
