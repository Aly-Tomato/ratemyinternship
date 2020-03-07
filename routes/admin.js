// Connect to db
const { Pool, Client} = require('pg');

// pool used environment variables for connection
const pool = new Pool();
const client = new Client();

exports.deleteRows = function(req, res){
    const {Pool} = require('pg');
    const pool = new Pool();
    console.log(req.body.to_delete);
    var query = "DELETE FROM reviews WHERE uid IN (";
    for(var i=1; i <= req.body.to_delete.length; ++i){
        if(i===1){query += `$${i}`;}
        else{ query += `, $${i}`;}
    }
    query += ')';

    pool.query(query, Array.from(req.body.to_delete), (error, results) =>{
        if(error){
            //send notification to admins
            console.log(error.stack);
        }
        res.redirect('/thankyou');
    });
};

exports.login = function(req, res){
    res.status(200);
    res.sendFile('adminLogin.html', {root:'views/'});
};

exports.auth = function(req, res){
    /*
    var passport = require('passport')
        , LocalStrategy = require('passport-local').Strategy;
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true
    });
    passport.use(new LocalStrategy(authenticate_admin));
     */

    res.status(200);
    res.sendFile('admin.html', {root:'views/'});
};


function authenticate_admin(username, password, done){

   client
       .query('SELECT * FROM public.admin')
       .then(res =>{
           console.log(res.rows[0]);
           if(username === res.rows[0]){
               if(password == res.rows[0]){

               }
               else{
                   return done(null, false, {message: "Incorrect Password"});
               }
           }
           else{
               return done(null, false, {message: "Incorrect Username"});
           }
       })
       .catch(e => console.error(e.stack));
}

