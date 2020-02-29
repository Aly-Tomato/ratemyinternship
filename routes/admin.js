// Connect to db
const { Pool, Client} = require('pg');

// pool used environment variables for connection
const pool = new Pool();
const client = new Client();

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
});

exports.login = function(req, res){
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

exports.auth = function(res, req){
    passport.use(new LocalStrategy(authenticate_admin));
};
