import { findSectionFromSection_id } from './section'
exports.chooseCourse = function(coursesSelect,pageTwo){
	let { kana,laksoot,prapet,year,sec,rob } = coursesSelect
	let url = `/callcourse/${kana}/${laksoot}/${prapet}/${year}/R/${sec}`
	fetch(url)
	.then((res)=>
	    res.json()
	).then((res)=>{
	    var courses= []
	    for(let i in res.allCourse){
	    	courses.push(findSectionFromSection_id(res.allCourse[i]))
	    }
	    pageTwo(courses)
	})
}