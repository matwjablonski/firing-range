const express = require('express');
const app = express();

app.post('/', function(req, res) {
    console.log(req);
    res.sendStatus(200);
});

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(8080);