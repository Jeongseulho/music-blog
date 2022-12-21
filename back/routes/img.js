const express = require('express');
const request = require('request');
require('dotenv').config();
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  const option = {
    query: req.query.searchText, //이미지 검색 텍스트
    start: 1, //검색 시작 위치
    display: 5, //가져올 이미지 갯수
    sort: 'sim', //정렬 유형 (sim:유사도)
    filter: 'all', //이미지 사이즈
  };

  const api_url = 'https://openapi.naver.com/v1/search/image';

  const options = {
    url: api_url,
    qs: option,
    headers: {
      'X-Naver-Client-Id': process.env.NAVERIMG_API_ID,
      'X-Naver-Client-Secret': process.env.NAVERIMG_API_SECRET,
    },
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
      return JSON.parse(body);
    } else {
      res.status(response.statusCode).end();
    }
  });
});

module.exports = router;
