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

// testing ajax
const testDataBase = {
    '0': {company: 'Intel', city: 'Portland', position: 'Software Engineer', start: '2003-12-02', end: '2004-04-01', intern_type: 'other', pay_type: 'Annual', pay_amount: '$20,000 - $35,000', work_desc: 'Engineering some programs.', overall_rating: '5', leadership_rating: '4', communication_rating: '3', flexibility_rating: '2', culture_rating: '1', internship_recommend: '2', company_recommend: '3', ratings_desc: 'Theyre ok.'},
    '1': {company: 'Nike', city: 'Beaverton', position: 'Software Engineering Intern', start: '2018-12-02', end: '2020-04-01', intern_type: 'other', pay_type: 'Annual', pay_amount: '$20,000 - $35,000', work_desc: 'Engineering some high tech shoes', overall_rating: '5', leadership_rating: '4', communication_rating: '3', flexibility_rating: '2', culture_rating: '1', internship_recommend: '2', company_recommend: '3', ratings_desc: 'NULL'}
};

app.get('/test', (req, res) => {
    const allUsers = Object.keys(testDataBase);
    res.send(allUsers);
})

app.get('/test/:userid', (req, res) => {
    const nameToLookup = req.params.userid;
    const val = testDataBase[nameToLookup];
    console.log(nameToLookup, '->', val);
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
})


app.listen(5000);
console.log(`Listening on localhost:5000`);
