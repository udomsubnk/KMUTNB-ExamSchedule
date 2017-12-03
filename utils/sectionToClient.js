let mysql = require("mysql");
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "klogic"
});
console.log("connected")
con.query("SELECT * FROM sections;", function(err,res){
		if(err) throw err;
		console.log(res.length)
		writeFile(res)
});

function writeFile(sections){
	fs.appendFile("allSections.txt", JSON.stringify(sections), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	}); 
}