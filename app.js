const express = require('express');
const app = express();

app.use('views/', express.static('views'));
app.use('/static', express.static('static'));
var documentation = require('./routes/documentation');
var addReview = require('./routes/addReview');
var admin = require('./routes/admin');

module.exports = app;

// initial index route
app.get('/', (req, res) =>{
    res.status(200);
    res.sendFile('index.html', {root: 'views/'});
});

// documentation routes
app.get('/documentation', documentation.list);

// addReview routes
app.get('/addReview', addReview.form);
app.post('/addReview', addReview.submit);

// admin routes
app.get('/admin', admin.login);
app.post('/admin', admin.auth);

app.listen(5000);
