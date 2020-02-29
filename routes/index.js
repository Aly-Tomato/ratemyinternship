exports.getURL = function(req, res) {
  const { Pool, Client } = require("pg");
  const pool = new Pool({
    user: "atamayo",
    host: "db.cecs.pdx.edu",
    database: "atamayo",
    password: "y4@z4qxgMw",
    port: 5432
  });
  pool.query("SELECT* FROM reviews", (err, res) => {
    console.log(err, res.rows);
    // window.document.getElementById("response").innerHTML = res.rows;
  });
  res.status(200);
  res.sendFile("index.html", { root: "views/" });
};
