var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/data', (req,res,next)=>{
	var id = req.body.id;
	reqData(id);
	res.send('eiei');
});


//ไม่ต้องมีที่นั่งก็ได้มั้ง

function reqData(id){
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
    		console.log({result})
    		return {result}
  		}
	})
}





module.exports = router;
