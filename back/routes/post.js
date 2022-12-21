const express = require('express');
const db = require('../db');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { title, singer, content, userIp, image } = req.body;
  const sqlQuery =
    'INSERT INTO POSTINFO (title, singer, content, image, userIp) VALUES (?,?,?,?,?)';
  db.query(sqlQuery, [title, singer, content, image, userIp], (err, result) => {
    res.send(result);
  });
});

router.get('/:postId', (req, res) => {
  const postId = req.params.postId;
  const sqlQuery = `SELECT* FROM POSTINFO WHERE postId = ${postId}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

router.put('/:postId', (req, res) => {
  const { title, singer, content, postId } = req.body;
  const sqlQuery = `UPDATE POSTINFO SET title = '${title}', singer = '${singer}', content = '${content}', WHERE postId = ${postId}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

router.delete('/:postId', (req, res) => {
  const postId = req.params.postId;
  const sqlQueryDelPost = `DELETE FROM POSTINFO WHERE postId=${postId};`;
  const sqlQueryDelReply = `DELETE FROM REPLYINFO WHERE postId=${postId}`;
  const sqlQuery = sqlQueryDelPost + sqlQueryDelReply;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
