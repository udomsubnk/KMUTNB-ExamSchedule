let mysql = require("mysql");
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "klogic"
});
console.log("connected")
con.query("SELECT * FROM courses;", function(err,res){
		if(err) throw err;
		console.log(res.length)
		writeFile(res)
});

function writeFile(courses){
	fs.appendFile("allCourses.txt", JSON.stringify(courses), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	}); 
}