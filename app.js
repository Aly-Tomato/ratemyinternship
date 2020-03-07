const express = require("express");
const app = express();

app.use("views/", express.static("views"));
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: false }));

const { Pool } = require("pg");
const pool = new Pool();

var documentation = require("./routes/documentation");
var addReview = require("./routes/addReview");
var admin = require("./routes/admin");
var index = require("./routes/index");

module.exports = app;

// initial index route
app.get("/", (req, res) => {
  res.status(200);
  res.sendFile("index.html", { root: "views/" });
});
app.post("/getURL", index.getURL);

// documentation routes
app.get("/documentation", documentation.list);

// addReview routes
app.get("/addReview", addReview.form);
app.post("/submit", addReview.submitReview);
app.get("/thankyou", addReview.thankyou);

// admin routes
app.get("/admin", admin.login);
app.post("/admin", admin.auth);

app.get("/api/:field/:value", (req, res) => {
  var query = `SELECT * FROM reviews WHERE ${req.params.field}='${req.params.value}'`;
  pool.query(
    `SELECT * FROM reviews WHERE ${req.params.field}='${req.params.value}'`,
    (err, result) => {
      try {
        if (err) throw err;
        res.send(result.rows);
      } catch {
        res.status(500);
        res.send("Error");
      }
    }
  );
});

app.get("/api/all/:field", (req, res) => {
  pool.query(
    `SELECT DISTINCT(${req.params.field}) FROM reviews`,
    (err, result) => {
      try {
        if (err) throw err;
        res.send(result.rows);
      } catch {
        res.status(500);
        res.send("Error");
      }
    }
  );
});

app.get("/api/all", (req, res) => {
  pool.query("SELECT* FROM reviews", (err, result) => {
    try {
      if (err) throw err;
      res.send(result.rows);
    } catch {
        res.status(500);
        res.send("Error");
    }
  });
});

app.listen(5000);
console.log(`Listening on localhost:5000`);
