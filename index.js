const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.post('/', function(req, res) {
    console.log(req);
    res.sendStatus(200);
});

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));