import { findSectionFromSection_id } from './section'
exports.chooseCourse = function(coursesSelect,pageTwo){
		let kana = coursesSelect.kana
		let laksoot = coursesSelect.laksoot
		let prapet = coursesSelect.prapet
	    let year = coursesSelect.year
	    let sec = coursesSelect.sec
	    let rob = coursesSelect.rob
	    console.log(coursesSelect)
	    let url = `/callcourse/${kana}/${laksoot}/${prapet}/${year}/R/${sec}`
	    fetch(url)
	    .then((res)=>{
	    	return res.json()
	    }).then((res)=>{
	    	var courses= []
	    	for(let i in res.allCourse){
	    		courses.push(findSectionFromSection_id(res.allCourse[i]))
	    	}
	    	console.log(courses)
	    	pageTwo(courses)
	    })
}