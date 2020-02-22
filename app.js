const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('static/css'));
app.use(express.static('static/js'));

app.get('/', (req, res) =>{
    res.status(200);
    res.sendFile('index.html');
});

app.get('/add', (req, res) =>{
    res.status(200);
    res.sendFile('public/contribute.html');
});

app.listen(5000);
