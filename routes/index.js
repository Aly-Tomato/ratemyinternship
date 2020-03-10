// Currently does not do the routing. Plans to isolate all routing for 
// routes related to the index.html page later
exports.getURL = function(req, res) {
    const { Pool } = require("pg");
    const pool = new Pool();

    var rows = pool.query("SELECT* FROM reviews", (err, res) => {
        if(err) throw err;
        return res.rows;
    });
};
