let request = require('request')
let cheerio = require('cheerio')
let mysql = require("mysql");
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "klogic"
});

con.connect(function(err){
  if(err){console.log('Error connecting to Db');return;}
  console.log('Connected.')
});


fs.readFile('data.html',"utf8", (err, data) => {
  if (err) throw err;
  let $ = cheerio.load(data)
	var course_id = ""
	var section_id = 1;
  $("table[border=1]").children('tbody').children('tr').each(function(index, el) {
  	var sections = []
  	if($(this).attr("bgcolor")=="#EA98FF"){
  		course_id = $(this).text().trim().split(" ")[0]
  	}
	else if($(this).attr("bgcolor")=="#F1F1FD"){
		a=$(this).children('td:nth-child(1)').text().trim().replace(/\t/g,"").replace(/\n/g,"").split(".")
		b=$(this).children('td:nth-child(2)').text().trim().replace(/\t/g," ").replace(/\n/g,"").replace(/  +/g, ' ').split(" ")
		c=$(this).children('td:nth-child(4)').text().trim().replace(/\t/g,"").replace(/\n/g,"")
		var type = a[0]
		var section = a[1]
		var day = b[0]
		var time = b[1]
		var prof = b[2]
		var room = b.pop()
		var n = c
		if(room==prof)
			room=""
		console.log(course_id,type,section,day,time,prof,room,n)
		insertToSections(course_id,type,section,day,time,prof,room,n,section_id++)
	}
	else{

	}
  });
});

function insertToCourses(course_id,name,weight){
	con.query("INSERT INTO courses VALUES ('"+course_id+"','"+name+"','"+weight+"');"), function(err,res){
		if(err) throw err;
		console.log("done")
	}
}

function insertToSections(course_id,type,section,day,time,prof,room,n,section_id){
	con.query("INSERT INTO sections VALUES ('"+course_id+"','"+type+"','"+section+"','"+day+"','"+time+"','"+prof+"','"+room+"','"+n+"','"+section_id+"');"), function(err,res){
		if(err) throw err;
		console.log("done")
	}
}

// function createPlaylist(words,playlistName,playlistDetail,url){
// 	con.query("INSERT INTO Playlists (title,detail,url) VALUES ('"+playlistName+"','"+playlistDetail+"','"+url+"');", function(err,res){
// 		if(err) throw err;
// 		var playlist_id = res.insertId
// 		for(i in words)
// 			addToPlaylist(playlist_id,words[i])
// 	});
// }
// function insertToDB(vocab){
// 	//check Duplicate
// 	con.query('SELECT * from vocabs where vocab = "'+vocab+'";', function(err,res){
// 		if(err) throw err;
// 		if(res.length!=0)return;
// 		con.query('INSERT INTO Vocabs (vocab) VALUES ("'+vocab+'");', function(err,res){
// 			if(err) throw err;
// 			console.log('Last insert Vocabs:',countInsert++);
// 		});
// 	});
// }
// function addToPlaylist(playlist_id,vocab){
// 	con.query('INSERT INTO In_playlist (playlist_id,vocab) VALUES ("'+playlist_id+'","'+vocab+'");', function(err,res){
// 		if(err) throw err;
// 		console.log('Last insert In_playlist:', countToPlaylist++);
// 	});
// }
// function end(){
// 	con.end(function(err) {console.log('error');return;});
// 	console.log('Success!')
// }