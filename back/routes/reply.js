const express = require('express');
const db = require('../db');
const router = express.Router();

// post reply
router.post('/', (req, res) => {
  console.log(req.body);
  const { postId, content, userIp } = req.body;
  const sqlQuery =
    'INSERT INTO replyinfo (postId, content, userIp) VALUES (?, ?, ?)';
  db.query(sqlQuery, [postId, content, userIp], (err, result) => {
    res.send(result);
  });
});

module.exports = router;
