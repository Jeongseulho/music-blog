const express = require('express');
const db = require('../db');
const router = express.Router();

// post reply
router.post('/', (req, res) => {
  const { postId, content, userIp } = req.body;
  const sqlQuery =
    'INSERT INTO replyinfo (postId, content, userIp) VALUES (?, ?, ?)';
  db.query(sqlQuery, [postId, content, userIp], (err, result) => {
    res.send(result);
  });
});

// get all reply list
router.get('/all', (req, res) => {
  const sqlQuery = 'SELECT * FROM replyinfo';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// get reply list
router.get('/:postId', (req, res) => {
  const sqlQuery = 'SELECT * FROM replyinfo WHERE postId = ?';
  db.query(sqlQuery, req.params.postId, (err, result) => {
    res.send(result);
  });
});

router.delete('/:replyId', (req, res) => {
  const sqlQuery = 'DELETE FROM replyinfo WHERE replyId = ?';
  db.query(sqlQuery, req.params.replyId, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
