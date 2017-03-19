var express = require('express')

app = express();

app.get('/',(req,res,next)=>{
	res.send('<a href="/xxx">nmnmnm</a>')
})
app.get('/xxx',(req,res,next)=>{
	res.sendFile('test.ics', { root: __dirname });
})
app.get('/yyy',(req,res,next)=>{
	res.sendFile('thaiholidays2560.ics', { root: __dirname });
})

app.listen(8888)