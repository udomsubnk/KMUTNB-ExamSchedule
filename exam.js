
function scrap(index){
var i=index
var Mday,Mdate,Mmonth,Myear,MtimeStart,MtimeEnd,Fday,Fdate,Fmonth,Fyear,FtimeStart,FtimeEnd;

var code = $('table[bordercolor="#CCCCCC"]').children('tbody').children('tr:nth-child('+i+')').children('td:nth-child(1)').text().split(" ")[0].trim()
mid = $('table[bordercolor="#CCCCCC"]').children('tbody').children('tr:nth-child('+i+')').children('td:nth-child(2)')
final = $('table[bordercolor="#CCCCCC"]').children('tbody').children('tr:nth-child('+i+')').children('td:nth-child(3)')

if(mid.text().trim().length){
	day = mid.text().split(". ")[0] || undefined
	Mday = (day=="จ")?"M":(day=="อ")?"T":(day=="พ")?"W":(day=="พฤ")?"H":(day=="ศ")?"F":"S";

	date = mid.text().split(" ")[1].split("/")
	Mdate = date[0]
	Mmonth = date[1]
	Myear = parseInt(date[2])-543+""

	time = mid.text().split(" ")[2].split('-')
	MtimeStart = time[0]
	MtimeEnd = time[1]
}
if(final.text().trim().length){
	day = final.text().split(". ")[0]
	Fday = (day=="จ")?"M":(day=="อ")?"T":(day=="พ")?"W":(day=="พฤ")?"H":(day=="ศ")?"F":"S";

	date = final.text().split(" ")[1].split("/")
	Fdate = date[0]
	Fmonth = date[1]
	Fyear = parseInt(date[2])-543+""

	time = final.text().split("  ")[1].split("-")
	FtimeStart = time[0]
	FtimeEnd = time[1]
}
var data = {
	code,
	exam:{
		mid:{day:Mday,date:Mdate,month:Mmonth,year:Myear,timeStart:MtimeStart,timeEnd:MtimeEnd},
		final:{day:Fday,date:Fdate,month:Fmonth,year:Fyear,timeStart:FtimeStart,timeEnd:FtimeEnd}
	}
}
return data;
}
var alldata = []
for(i=2;i<=$('table[bordercolor="#CCCCCC"]').children('tbody').children('tr').length;i++){
	alldata.push(scrap(i))
}
console.log(JSON.stringify(alldata))
 window.prompt("Copy to clipboard: Ctrl+C, Enter", JSON.stringify(alldata));
