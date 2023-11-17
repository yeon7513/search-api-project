require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4100;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.get('/', (req, res) => {
  console.log('Server is Connected!');
  res.send('SERVER OPEN');
});

// 백과사전 검색 API
app.get('/search/encyc', (req, res) => {
  const query = req.query.query;

  const api_url = 'https://openapi.naver.com/v1/search/encyc?query='+encodeURI(query)+'&display=6&start=1';
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function(err, response, body){
    if(!err && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

// 도서 검색 API
app.get('/search/book', (req, res) => {
  const query = req.query.query;

  const api_url = 'https://openapi.naver.com/v1/search/book?query='+encodeURI(query)+'&display=6&start=1';
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function(err, response, body){
    if(!err && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

// 이미지 검색 API
app.get('/search/image', (req, res) => {
  const query = req.query.query;

  const api_url = 'https://openapi.naver.com/v1/search/image?query='+encodeURI(query)+'&display=6&start=1&filter=large';
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function(err, response, body){
    if(!err && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

// 지역 검색 API
app.get('/search/local', (req, res) => {
  const query = req.query.query;

  const api_url = 'https://openapi.naver.com/v1/search/local?query='+encodeURI(query)+'&display=6&start=1';
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function(err, response, body){
    if(!err && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});


app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});