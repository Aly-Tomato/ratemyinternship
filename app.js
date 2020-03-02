const express = require('express');
const app = express();

app.use('views/', express.static('views'));
app.use('/static', express.static('static'));
app.use(express.urlencoded({'extended': false}));

var documentation = require('./routes/documentation');
var addReview = require('./routes/addReview');
var admin = require('./routes/admin');
var index = require('./routes/index');

module.exports = app;

// initial index route
app.get('/', (req, res) =>{
    res.status(200);
    res.sendFile('index.html', {root: 'views/'});
});
app.post('/getURL', index.getURL);

// documentation routes
app.get('/documentation', documentation.list);

// addReview routes
app.get('/addReview', addReview.form);
app.post('/submit', addReview.submitReview);
app.get('/thankyou', addReview.thankyou);

// admin routes
app.get('/admin', admin.login);
app.post('/admin', admin.auth);


app.get('/all', (req, res) => {
    const { Pool } = require("pg");
    const pool = new Pool({
        user: "atamayo",
        host: "db.cecs.pdx.edu",
        database: "atamayo",
        password: "y4@z4qxgMw",
        port: 5432
    });

    pool.query("SELECT* FROM reviews", (err, result) => {
        if(err) throw err;
        res.send(result.rows);
    });
})

app.listen(5000);
console.log(`Listening on localhost:5000`);
