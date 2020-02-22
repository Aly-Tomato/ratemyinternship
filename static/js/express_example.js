const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.set({ 'Content-Type': 'text/html' });
    res.send("Hello World, Express!");
});

app.get('/project', (req, res) =>{
    res.status(200);
    app.use(express.static('static'))
    app.use(express.static('static/css'))
    app.use(express.static('static/js'))

    res.sendFile(path.join(__dirname+'contribute.html'))
});

app.listen(5000);
