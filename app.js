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
app.post("/submitform", addReview.submitReview);
app.get("/thankyou", addReview.thankyou);

// admin routes
app.get("/admin", admin.auth);
app.post("/delete", admin.deleteRows);
app.post("/thankyounext");

// api URLs
app.get("/api/all/:field", (req, res) => {
  // check if field was valid
  var validFields = [
    "uid",
    "company",
    "location",
    "position",
    "start",
    "end",
    "intern_type",
    "pay_type",
    "pay_amount",
    "work_desc",
    "overall_rating",
    "leadership_rating",
    "communication_rating",
    "flexibility_rating",
    "culture_rating",
    "internship_recommend",
    "company_recommend",
    "ratings_desc"
  ];
  if (!validFields.includes(req.params.field)) {
    res.status(500);
    res.send("Error");
    return;
  }
  pool.query(
    `SELECT DISTINCT(${req.params.field}) FROM reviews`,
    (err, result) => {
      if (err) {
        res.status(500);
        res.send("Error");
      } else {
        res.status(200);
        res.send(result.rows);
      }
    }
  );
});

app.get("/api/:field/:value", (req, res) => {
  var query = `SELECT * FROM reviews WHERE ${req.params.field}='${req.params.value}'`;
  // check if field was valid
  var validFields = [
    "uid",
    "company",
    "location",
    "position",
    "start",
    "end",
    "intern_type",
    "pay_type",
    "pay_amount",
    "work_desc",
    "overall_rating",
    "leadership_rating",
    "communication_rating",
    "flexibility_rating",
    "culture_rating",
    "internship_recommend",
    "company_recommend",
    "ratings_desc"
  ];
  if (!validFields.includes(req.params.field)) {
    res.status(500);
    res.send("Error");
    return;
  }
  pool.query(
    `SELECT * FROM reviews WHERE ${req.params.field}='${req.params.value}'`,
    (err, result) => {
      if (err) {
        res.status(500);
        res.send("Error");
      } else {
        res.status(200);
        res.send(result.rows);
      }
    }
  );
});

app.get("/api/all", (req, res) => {
  pool.query("SELECT* FROM reviews", (err, result) => {
    if (err) {
      res.status(500);
      res.send("Error");
    } else {
      res.status(200);
      res.send(result.rows);
    }
  });
});

app.listen(5000);
