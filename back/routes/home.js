const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/list', (req, res) => {
  const sqlQuery = 'SELECT* FROM POSTINFO';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
