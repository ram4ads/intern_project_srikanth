const express = require("express");
const cors = require("cors");
const MySql = require("mysql2");

const db = MySql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test"
})


const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello React+MySql")
})

app.post("/post", (req, res) => {
  const { link1 } = req.body;
  const insertIntoDb = "INSERT INTO test.new_table (Link_Type,Date_Time) VALUES (?,NOW())";
  db.query(insertIntoDb, [link1], (error, result) => {
    if (error) {
      console.log("Error while inserting:", error);
      res.status(500).json({ message: "Error while inserting data into the database" });
    } else {
      console.log("Count inserted successfully");
      res.status(200).json({ message: "Count inserted successfully" });
    }
  });
});

app.get("/data", (req, res) => {
  const GetQuery = "SELECT * FROM test.new_table";
  db.query(GetQuery, (error, results) => {
    res.send(results)
  })
})

app.get("/poll", (req, res) => {
  const getPolingQuery = "SELECT Link_Type, count(Link_Type) as count from test.new_table group by Link_Type";
  db.query(getPolingQuery, (error, results) => {
    res.send(results);
  })
})

app.get("/dateAndTime", (req, res) => {
  const dateTimeQuery = `SELECT CONCAT(DATE_FORMAT(Date_Time, '%H'), '-',
  DATE_FORMAT(DATE_ADD(Date_Time, INTERVAL 1 HOUR), '%H')) as interval_range,
  SUM(CASE WHEN Link_Type = 'link1' THEN 1 ELSE 0 END) as link1,
  SUM(CASE WHEN Link_Type = 'link2' THEN 1 ELSE 0 END) as link2
  FROM test.new_table WHERE DATE(Date_Time) = '2023-05-12'
  GROUP BY interval_range
  ORDER BY interval_range;`;
  db.query(dateTimeQuery, (error, results) => {
    res.send(results)
  })
})


app.listen(5000, console.log("express server is running on 5000 port"));
