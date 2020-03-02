exports.getURL = function(req, res) {
    const fs = require('fs');
    const jsdom = require('jsdom');
    const {JSDOM} = jsdom;

    const { Pool } = require("pg");
    const pool = new Pool({
        user: "atamayo",
        host: "db.cecs.pdx.edu",
        database: "atamayo",
        password: "y4@z4qxgMw",
        port: 5432
    });

    var rows = pool.query("SELECT* FROM views", (err, res) => {
        console.log(res.rows);
        if(err) throw err;
        return res.rows;
    });

   fs.readFile('views/index.html', (err, html) => {
       if (err) throw err;
       const dom = new JSDOM(html.toString());
       const document = dom.window.document;
       var elem = document.getElementById('response').innerText;
       console.log(elem);
    });

   res.send();
};