const express = require('express');
const app = express();
const PORT = process.env.port || 8000;

const cors = require('cors');
const corsOptions = {
  origin: '*', // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};
app.use(cors(corsOptions));

app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
});

const home = require('./routes/home');
app.use('/', home);

const post = require('./routes/post');
app.use('/post', post);

const reply = require('./routes/reply');
app.use('/reply', reply);

const img = require('./routes/img');
app.use('/img', img);
