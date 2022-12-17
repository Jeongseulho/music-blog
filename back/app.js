const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const home = require('./routes/home');
const post = require('./routes/post');

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

app.use('/', home);

app.use('/post', post);
