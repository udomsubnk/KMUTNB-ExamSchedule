var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/data', (req,res,next)=>{
	var id = req.body.id;
  res.send(reqData(id))
});
router.get('/file/:id',(req,res,next)=>{
  console.log('Come in')
  res.sendFile(path.resolve('public/files/'+req.params.id+'.ics'));
});

function reqData(id){
  fileName = id+"122559"
	request('http://www.scibase.kmutnb.ac.th/examroom/datatrain.php?IDcard='+id, function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			var name,test,term,year;
    		var $ = cheerio.load(body)
    		name = $('font[color="#0000FF"]').text();
    		var caption = $('caption').text().trim().split(' ');
    		test = caption[0]
    		term = caption[2]
    		year = caption[4]
    		var result=[];
    		var date,time,code,sname,sec,colseet,rowseet,room,floor,building;
    		$('tr[bgcolor]').each(function(index, el) {
    			result[index] = []
				  $(this).children('td').each(function(i, el) {
					  result[index].push($(this).text().trim())
				  });
    		});
        createFile(result,fileName);
  		}
	})
  return fileName;
}


function createFile(result,fileName){
  var date = Date().split(' ')
  var text = `BEGIN:VCALENDAR
METHOD:PUBLISH
VERSION:2.0
X-WR-CALNAME:ปฏิทินสอบกลางภาค
PRODID:-//Apple Inc.//Mac OS X 10.12.1//EN
X-APPLE-CALENDAR-COLOR:#63DA38
X-WR-TIMEZONE:Asia/Bangkok
CALSCALE:GREGORIAN\n`
  for(i in result){
    text+='BEGIN:VEVENT\n'
    text+='UID:'+i+'\n'
    text+='DTSTAMP: '+date[3]+date[1]+date[2]+'T'+'000000\n'
    text+='LOCATION:อาคาร'+result[i][9]+' ชั้น'+result[i][8]+' ห้อง'+result[i][7]+'\n'
    text+='DTSTART:20170226T090000\n'
    text+='DTEND:20170226T120000\n'
    text+='SUMMARY:'+result[i][3]+'\n'
    text+='DESCRIPTION:บลาๆๆๆ\n'
    text+='BEGIN:VALARM\n'
    text+='TRIGGER:-PT0030M\n'
    text+='ACTION:DISPLAY\n'
    text+='DESCRIPTION:Reminder\n'
    text+='END:VALARM\n'
    text+='END:VEVENT\n'
  }
  text += `END:VCALENDAR`
  return write(text,fileName)
}

function write(text,fileName){
  fs.writeFile("public/files/"+fileName+'.ics', text, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
    return "test.ics"
  });
}
module.exports = router;
