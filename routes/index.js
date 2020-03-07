exports.getURL = function(req, res) {
    const { Pool } = require("pg");
    const pool = new Pool();

    var rows = pool.query("SELECT* FROM reviews", (err, res) => {
        if(err) throw err;
        return res.rows;
    });
};
