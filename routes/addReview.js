exports.form = function(req,res){
    res.status(200);
    res.sendFile('addReview.html', {root:'views/'});
};

exports.submitReview = function(req,res){
    const {Pool} = require('pg');
    const pool = new Pool();

    var objects_list = [];
    Object.keys(req.body).forEach((key, val) =>{
        objects_list.push(req.body[key]);
    });
    objects_list[3] = new Date(objects_list[3]);
    objects_list[4] = new Date(objects_list[4]);

    const query = 'INSERT INTO reviews(company, location, "position", "start", "end", intern_type, pay_type, pay_amount, ' +
        'work_desc, overall_rating, leadership_rating, communication_rating, flexibility_rating, culture_rating, internship_recommend, company_recommend, ratings_desc)' +
        ' VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)';

    pool.query(query, objects_list, (error, results) =>{
        if(error){
            //send notification to admins
            console.log(error.stack);
            res.send("Error: Unable to connect to database. Issue has been sent to admins");
        }

        res.send(`User added with ID: ${res.insertId}`);
    });

};
