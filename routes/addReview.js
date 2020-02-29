exports.form = function(req,res){
    res.status(200);
    res.sendFile('addReview.html', {root:'views/'});
};

exports.submitReview = function(req,res){
    const {Pool} = require('pg');
    const pool = new Pool();

    console.log(req.body);
    var objects_list = [];
    Object.keys(req.body).forEach((key, val) =>{
        objects_list.push(req.body[key]);
    });

    console.log(objects_list);
    pool.query('INSERT INTO reviews ' +
        '(company, location, position, start, end, intern_type, pay_type, pay_amount, work_desc,' +
        'overall_rating, leadership_rating, communication_rating, flexibility_rating, culture_rating, internship_recommend, company_recommend, ratings_desc) ' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)',
        objects_list, (error, results) =>{
        if(error){
            //send notification to admins
            res.status(500).send("Error: Unable to connect to database. Issue has been sent to admins");
        }
        res.status(201).send(req.body);
    });

    res.status(201).send(`User added with ID: ${res.insertId}`);
    return "apples";
};
