exports.getURL = function(req, res) {
    const { Pool } = require("pg");
    const pool = new Pool();

    var rows = pool.query("SELECT* FROM reviews", (err, res) => {
        if(err) throw err;
        return res.rows;
    });
};

// app.get('/test', (req, res) => {
//     // const allUsers = Object.keys(testDataBase);
//     // res.send(allUsers);
//     console.log('Entered /test');
//     const { Pool } = require("pg");
//     const pool = new Pool({
//         user: "atamayo",
//         host: "db.cecs.pdx.edu",
//         database: "atamayo",
//         password: "y4@z4qxgMw",
//         port: 5432
//     });

//     pool.query("SELECT* FROM reviews", (err, result) => {
//         if(err) throw err;
//         // console.log(result.rows);
//         // const allCompanies = result.rows.map(e => e.company);
//         // console.log(allCompanies);
//         res.send(result.rows);
//     });
// })

// app.get('/test/:intern_typeid', (req, res) => {
//     const companyToLookup = req.params.intern_typeid;
//     console.log('Entered /test/companyid');
//     const { Pool } = require("pg");
//     const pool = new Pool({
//         user: "atamayo",
//         host: "db.cecs.pdx.edu",
//         database: "atamayo",
//         password: "y4@z4qxgMw",
//         port: 5432
//     });
//     {
//       $intern_type: companyToLookup
//     }

//     pool.query("SELECT* FROM reviews WHERE intern_type=$intern_type", (err, result) => {
//         if(err) throw err;
//         console.log(result.rows);
//     }); 
//     // if (val) {
//     //     res.send(val);
//     // } else {
//     //     res.send({});
//     // }
// })