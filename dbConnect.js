const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost:3306",
  user: "messagingContact@localhost",
  password: "root",
  database: 'root'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tasks", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});