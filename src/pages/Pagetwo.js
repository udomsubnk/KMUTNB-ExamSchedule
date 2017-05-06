import React,{Component} from'react'

import SubjectSearchItem from'../components/SubjectSearchItem'
import SectionListItem from '../components/SectionListItem'
import { Daybox,Hiddenbox,DayboxExam,HiddenboxExam } from '../components/Box'
import SelectSubjectItem from '../components/SelectSubjectItem'
import { AlertExam,AlertStudy } from '../components/Alert'

import { findNameFormCourseID,findById } from '../api/subject'
import { findSection,findSectionFromSection_id } from '../api/section'
import { day,dayExam } from '../api/day'
import { findDataExam } from '../api/exam'

import StudyTable from '../containers/StudyTable'
import ExamTable from '../containers/ExamTable'

class Pagetwo extends Component{

	constructor(props){
		super(props)
		this.state={
			val:'',
			subject:[],
			SearchList:[],
			selectSection:[],
			specialSection:[],
			arraybox:[],
			dataSubject:[],
			allselect:[],
			examarrayMid:[],
			examarrayFinal:[],
			credit:0,
			alertStudy:false,
			alertExam:false,
			dataGetBack:[],
	
		}
		this.getBack = this.getBack.bind(this)
		this.removeClick = this.removeClick.bind(this)
		this.searchUpdate = this.searchUpdate.bind(this)
		this.selectCourse = this.selectCourse.bind(this)
		this.addSection = this.addSection.bind(this)
		this.checkTime = this.checkTime.bind(this)
		this.removeListSection = this.removeListSection.bind(this)
		this.checkTimeExam = this.checkTimeExam.bind(this)
		this.checkCredit = this.checkCredit.bind(this)
		this.checkAlert = this.checkAlert.bind(this)
	}

	checkCredit(){
		const { allselect } = this.state
		let x=0
		for(let i in allselect){
			const section = findSectionFromSection_id(allselect[i])
			if(section.type != 'L'){
				const weigth = findById(section.course_id).weight
				const weightInt = parseInt(weigth.substring(0,1))
				x+=weightInt
			}
		}
		this.setState({
			credit:x
		})
	}

	componentWillMount(){
		const { arraybox } = this.state
		const { dataPageOne } = this.props
		for(var i=0;i<6;i++){
			arraybox.push([])
			for(var j=0;j<25;j++){
				let itembox = {
					id:j,
					beginStatusBig:false,
					beginStatusExtraSmall:false,
					beginStatusSmall:false,
					status:false,
					sectionId:'',
				}
				arraybox[i].push(itembox)
			}
		}
		const data = this.createStatus(dataPageOne)
		this.setState({
			arraybox:arraybox,
			dataSubject:data
		})
	}

	createStatus(dataSubject){
		const status = { status: true }
		const dataStatus = []
		dataSubject.map((data)=>
			dataStatus.push(Object.assign(data,status))
		)
		return dataStatus
	}

	componentDidMount(){
		act('processbar-p2');
		
		$(document).ready(function() {
			$('.add').click()
		});
		this.checkCredit()
		fetch(`http://localhost:3000/subject`)
		.then(res=> res.json())
		.then( subject =>{
			this.setState({
				subject: subject
			})
		})
	}

	checkAlert(data){
		const { examarrayMid,examarrayFinal,allselect,alertStudy,alertExam } = this.state
		let tempp1=false,tempp2=false
			for(var i=1;i<allselect.length;i++){
				for(var j=0;j<i;j++){
					var sec1 = findSectionFromSection_id(allselect[i]).course_id
					var sec2 = findSectionFromSection_id(allselect[j]).course_id
					var type1 = findSectionFromSection_id(allselect[i]).type
					var type2 = findSectionFromSection_id(allselect[j]).type
					if(type1 == 'S' && type2 == 'S'){
						if(sec1 == sec2 )
							tempp1 = true
					}
				}
			}
			for(var i=1;i<examarrayMid.length;i++){
				for(var j=0;j<i;j++){
					if(examarrayMid[i][0].day == examarrayMid[j][0].day && examarrayMid[i][0].month == examarrayMid[j][0].month && examarrayMid[i][0].year == examarrayMid[j][0].year){
						for(var k=0;k<23;k++){
							if(examarrayMid[i][k].status == true && examarrayMid[j][k].status == true){
								tempp2 = true
							}
						}
					}
				}
			}
			for(var i=1;i<examarrayFinal.length;i++){
				for(var j=0;j<i;j++){
					if(examarrayFinal[i][0].day == examarrayFinal[j][0].day && examarrayFinal[i][0].month == examarrayFinal[j][0].month && examarrayFinal[i][0].year == examarrayFinal[j][0].year){
						for(var k=0;k<23;k++){
							if(examarrayFinal[i][k].status == true && examarrayFinal[j][k].status == true){
								tempp2 = true
							}
						}
					}
				}
			}
		if(tempp1 == true && tempp2 == false){
			this.setState({
				alertExam:false,
				alertStudy:true
			})
		}else if(tempp1 == false && tempp2 == true){
			this.setState({
				alertExam:true,
				alertStudy:false
			})
		}else if(tempp1 == true && tempp2 == true){
			this.setState({
				alertExam:true,
				alertStudy:true
			})
		}else{
			this.setState({
				alertExam:false,
				alertStudy:false
			})
		}
	}
	selectCourse(id){
		const {specialSection } = this.state
		const x = findSection(id)
		this.setState({
			specialSection:x
		})
	}

  	searchUpdate(e){
		let { val,SearchList,subject } = this.state
		val = e.target.value
		SearchList = subject.filter((subject) =>{
				return subject.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
		})
		this.setState({
			val:val,
			SearchList:SearchList
		})
	}
	// ADD button
  	checkTime(data){
		let { arraybox,allselect,dataSubject } = this.state
		let day = data.day
		if(data.time.length == 10){
			var timeOpen = data.time.substring(0,1) + ':' + data.time.substring(2,4)
			var timeClose = data.time.substring(5,7) + ':' + data.time.substring(8,10)	
		}
		else if(data.time.length == 11){
			var timeOpen = data.time.substring(0,2) + ':' + data.time.substring(3,5)
			var timeClose = data.time.substring(6,8) + ':' + data.time.substring(9,11)
		}else if(data.time.length == 9){
			var timeOpen = data.time.substring(0,1) + ':' + data.time.substring(2,4)
			var timeClose = data.time.substring(5,6) + ':' + data.time.substring(7,9)
		}
		const hour = parseInt(timeClose)-parseInt(timeOpen)
		const arrayday = ['M','T','W','H','F','S']
		const arraytime =['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
		'14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00']
		const begintime = arraytime.indexOf(timeOpen)
		const beginday = arrayday.indexOf(day)
		var check = true
		if(hour==2){
			for(var i=0;i<4;i++){
				if(arraybox[beginday][begintime+i].status == true){
					console.log('ดูเหมือนวิชาบางอันจะชนกันนะ')
					check = false
				}
			}
			if(check){
				arraybox[beginday][begintime].beginStatusSmall = true
				allselect.push(data.section_id)
				dataSubject.filter((d)=>
					d.section_id === data.section_id
				)[0].status = false
				for(var i=0;i<4;i++){
					arraybox[beginday][begintime+i].status = true
					arraybox[beginday][begintime+i].sectionId = data.section_id	
				}
				this.setState({
					dataSubject:dataSubject,
					arraybox:arraybox,
					allselect:allselect
					
				})
			}
		}else if(hour==3){
			for(var i=0;i<6;i++){
				if(arraybox[beginday][begintime+i].status == true){
					console.log('ดูเหมือนวิชาบางอันจะชนกันนะ')
					check = false
				}
			}
			if(check){
				arraybox[beginday][begintime].beginStatusBig = true
				allselect.push(data.section_id)
				dataSubject.filter((d)=>
					d.section_id === data.section_id
				)[0].status = false
				
				for(var i=0;i<6;i++){
					arraybox[beginday][begintime+i].status = true
					arraybox[beginday][begintime+i].sectionId = data.section_id		
				}
				this.setState({
					dataSubject:dataSubject,
					arraybox:arraybox,
					allselect:allselect
				})
			}
		}else if(hour==1){
			for(var i=0;i<2;i++){
				if(arraybox[beginday][begintime+i].status == true){
					console.log('ดูเหมือนวิชาบางอันจะชนกันนะ')
					check = false
				}
			}
			if(check){
				arraybox[beginday][begintime].beginStatusExtraSmall = true
				allselect.push(data.section_id)
				dataSubject.filter((d)=>
					d.section_id === data.section_id
				)[0].status = false
				
				for(var i=0;i<2;i++){
					arraybox[beginday][begintime+i].status = true
					arraybox[beginday][begintime+i].sectionId = data.section_id		
				}
				this.setState({
					dataSubject:dataSubject,
					arraybox:arraybox,
					allselect:allselect
				})
			}
		}
		this.checkCredit()
		const size = allselect.length
		this.checkTimeExam(data,size,check)
		
	}
	checkTimeExam(data,size,check){
		const { examarrayMid,examarrayFinal,allselect } = this.state
		let tempExamarrayMid = []
		let tempExamarrayFinal = []
		if(check == false){
			return
		}
		if(data.type == 'L' || data.course_id == '040613400'){
			return
		}
		let dataExam = findDataExam(data.course_id)
		//########check if no exam ##############
		if(dataExam==undefined){
			console.log('หาวิชาสอบไม่พบจ้า')
			this.checkAlert()
			return
		}
		// ##########################################
		for(var j=0;j<23;j++){
			let inlistM = {
				id:j,
				begin:false,
				status:false,
				statusBox:true,
				sectionId:'',
				date:'',
				year:'',
				day:'',
				month:'',
			}
			let inlistE = {
				id:j,
				begin:false,
				status:false,
				statusBox:true,
				sectionId:'',
				date:'',
				year:'',
				day:'',
				month:'',
			}
			tempExamarrayMid.push(inlistM)
			tempExamarrayFinal.push(inlistE)
		}
		const timeStartMidExam = dataExam.exam.mid.timeStart
		const timeEndtMidExam = dataExam.exam.mid.timeEnd
		const hourExamMid = parseInt(timeEndtMidExam)-parseInt(timeStartMidExam)
		
		const timeStartFinalExam = dataExam.exam.final.timeStart
		const timeEndFinalExam = dataExam.exam.final.timeEnd
		const hourExamFinal = parseInt(timeEndFinalExam)-parseInt(timeStartFinalExam)

		let alldateMid = dataExam.exam.mid.day+' '+dataExam.exam.mid.date+'/'+dataExam.exam.mid.month+'/'+dataExam.exam.mid.year
		let alldateFinal = dataExam.exam.final.day+' '+dataExam.exam.final.date+'/'+dataExam.exam.final.month+'/'+dataExam.exam.final.year

		const arraytimeExam =['9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
		'14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00']
		const targetMid = arraytimeExam.indexOf(timeStartMidExam)
		const targetFinal = arraytimeExam.indexOf(timeStartFinalExam)
		
		// Mid logic
		if(hourExamMid == 3 ) {
			tempExamarrayMid[targetMid].begin = true
			tempExamarrayMid[targetMid].date = alldateMid
			for(var i=0;i<6;i++){
				tempExamarrayMid[targetMid+i].status = true
				tempExamarrayMid[targetMid+i].sectionId = data.section_id		
			}
		}else if(hourExamMid == 2) {
			tempExamarrayMid[targetMid].begin = true
			tempExamarrayMid[targetMid].date = alldateMid
			for(var i=0;i<4;i++) {
				tempExamarrayMid[targetMid+i].status = true
				tempExamarrayMid[targetMid+i].sectionId = data.section_id
			}
		}else if(hourExamMid == 1) {
			tempExamarrayMid[size-1][targetMid].begin = true
			tempExamarrayMid[targetMid].date = alldateMid
			for(var i=0;i<2;i++){
				tempExamarrayMid[targetMid+i].status = true
				tempExamarrayMid[targetMid+i].sectionId = data.section_id	
			}
		}
		// Final logic
		if(hourExamFinal ==3 ) {
			tempExamarrayFinal[targetFinal].begin = true
			tempExamarrayFinal[targetFinal].date = alldateFinal
			for(var i=0;i<6;i++) {
				tempExamarrayFinal[targetFinal+i].status = true
				tempExamarrayFinal[targetFinal+i].sectionId = data.section_id		
			}
		}else if(hourExamFinal ==2) {
			tempExamarrayFinal[targetFinal].begin = true
			tempExamarrayFinal[targetFinal].date = alldateFinal
			for(var i=0;i<4;i++) {
				tempExamarrayFinal[targetFinal+i].status = true
				tempExamarrayFinal[targetFinal+i].sectionId = data.section_id
			}
		}else if(hourExamFinal ==1) {
			tempExamarrayFinal[size-1][targetFinal].begin = true
			tempExamarrayFinal[targetFinal].date = alldateFinal
			for(var i=0;i<2;i++){
				tempExamarrayFinal[targetFinal+i].status = true
				tempExamarrayFinal[targetFinal+i].sectionId = data.section_id	
			}
		}
		for(var i=0;i<23;i++) {
			tempExamarrayMid[i].day = dataExam.exam.mid.date
			tempExamarrayMid[i].year = dataExam.exam.mid.year
			tempExamarrayMid[i].month = dataExam.exam.mid.month
			tempExamarrayFinal[i].day = dataExam.exam.final.date
			tempExamarrayFinal[i].month = dataExam.exam.final.month
			tempExamarrayFinal[i].year = dataExam.exam.final.year
		}
		let temp = examarrayFinal.length
		if(temp!=size){
			if(tempExamarrayMid[0].day != undefined){
				examarrayMid.push(tempExamarrayMid)
			}
			if(tempExamarrayFinal[0].day != undefined){
				examarrayFinal.push(tempExamarrayFinal)
			}
			else 
				console.log('ไม่มีสอบทั้งMIDและFinalนะ')
		}
		this.setState({
			examarrayMid:examarrayMid,
			examarrayFinal:examarrayFinal
		})
		this.checkAlert(data)
	}

	addSection(data) {
		const { dataSubject,allselect } = this.state
		for(let i in allselect){
			if(allselect[i] == data.section_id)
				return
		}
		const dataWithStatus = Object.assign(data, { status: true })
		dataSubject.push(dataWithStatus)
		let cutdataSubject = dataSubject.reduce((prev,cur)=>{
			if(prev.indexOf(cur) < 0 )
				prev.push(cur);
			return prev;
		},[]);
		
		this.setState({
			dataSubject:cutdataSubject
		})
	}

	removeListSection(data){
		const { dataSubject,dataGetBack } = this.state
		const id = data.section_id
		dataGetBack.push(id)
		let cutdataGetBack = dataGetBack.reduce((prev,cur)=>{
			if(prev.indexOf(cur) < 0 )
				prev.push(cur);
			return prev;
		},[]);
		let obj = dataSubject.find(function(e){
			return id === e.section_id
		})
		let x = dataSubject.indexOf(obj)
		dataSubject.splice(x,1)
		this.setState({
			dataSubject:dataSubject,
			dataGetBack:cutdataGetBack
		})
	}
	// REMOVE button
	removeClick(data){
		
		const {arraybox,examarrayFinal,examarrayMid,allselect,dataSubject} = this.state
		if(data.time.length == 10){
			var timeOpen = data.time.substring(0,1) + ':' + data.time.substring(2,4)
			var timeClose = data.time.substring(5,7) + ':' + data.time.substring(8,10)	
		}else if(data.time.length == 11){
			var timeOpen = data.time.substring(0,2) + ':' + data.time.substring(3,5)
			var timeClose = data.time.substring(6,8) + ':' + data.time.substring(9,11)
		}else if(data.time.length == 9){
			var timeOpen = data.time.substring(0,1) + ':' + data.time.substring(2,4)
			var timeClose = data.time.substring(5,6) + ':' + data.time.substring(7,9)
		}
		const lengthstatus = parseInt(timeClose)-parseInt(timeOpen)
		const arraytime =['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
		'14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00']
		const begintime = arraytime.indexOf(timeOpen)
		for(var i=0;i<6;i++){
			for(var j=0;j<25;j++){
				 if(arraybox[i][j].sectionId == data.section_id){
					arraybox[i][j].beginStatusBig = false
					arraybox[i][j].beginStatusSmall = false
					arraybox[i][j].beginStatusExtraSmall = false
					arraybox[i][j].sectionId = ''
					for(var k=0;k<(lengthstatus*2);k++){
						arraybox[i][begintime+k].status = false
					}
					this.setState({
						arraybox:arraybox	
					})	
				 }
			}
		}
		for(var i=0;i<examarrayMid.length;i++){
			for(var j=0;j<23;j++){
				if(examarrayMid[i][j].sectionId == data.section_id){
					var indexRemoveMid = i
				}
			}
		}
		for(var i=0;i<examarrayFinal.length;i++){
			for(var j=0;j<23;j++){
				if(examarrayFinal[i][j].sectionId == data.section_id){
					var indexRemoveFinal = i
				}
			}
		}
		if (indexRemoveMid > -1 ) {
			dataSubject.filter((g)=>
				g.section_id === data.section_id
			)[0].status = true
			examarrayMid.splice(indexRemoveMid, 1);
		}
		if(indexRemoveFinal > -1){
			dataSubject.filter((g)=>
				g.section_id === data.section_id
			)[0].status = true
			examarrayFinal.splice(indexRemoveFinal, 1);
		}
		const x = allselect.indexOf(data.section_id)
		if( x > -1){
			dataSubject.filter((g)=>
				g.section_id === data.section_id
			)[0].status = true
			allselect.splice(x,1)
		}
		this.checkCredit()
		this.setState({
			dataSubject:dataSubject,
			allselect:allselect,
			examarrayMid:examarrayMid,
			examarrayFinal:examarrayFinal
		})
		this.checkAlert()
	}

	getBack(){
		const {dataGetBack,dataSubject} = this.state
		if(dataGetBack.length == 0){
			return
		}
		const data = findSectionFromSection_id(dataGetBack[dataGetBack.length-1])
		dataGetBack.splice(dataGetBack.length-1,1)
		dataSubject.push(data)
		this.setState({
			dataSubject:dataSubject,
			dataGetBack:dataGetBack
		})
	}

	setContainer(container){
		return container
	}
	render() {
		const { gothree,data } = this.props
		const { subject,SearchList,specialSection,arraybox,dataSubject,examarrayMid,examarrayFinal,allselect,credit,alertStudy,alertExam,dataGetBack } = this.state
		const showDropdownSearch = SearchList.map( (data) =>
			<SubjectSearchItem key={ data.course_id } data={ data } selectCourse={ this.selectCourse }/>
		)
		const showSelectSection = specialSection.map((data) =>
			<SectionListItem key={ data.section_id } section={ data } addSection={ this.addSection }/>
		)
		const showdataSubject = dataSubject.map((data) =>
			<SelectSubjectItem key={ data.section_id} data= { data } removeClick = { this.removeClick } checkTimeClick = { this.checkTime } removeListSectionClick = { this.removeListSection }/>
		)
		const daybox = day.map( (data) =>
			<Daybox key={ data.id } time={ data.time }/>
		)
		const dayExambox = dayExam.map( (data) =>
			<DayboxExam key={ data.id } time={ data.time }/>
		)
		const subjectboxMon =  arraybox[0].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const subjectboxTue =  arraybox[1].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const subjectboxWed =  arraybox[2].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const subjectboxThe =  arraybox[3].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const subjectboxFri =  arraybox[4].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const subjectboxSat =  arraybox[5].map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		return (
			<div className="container MoveChangePage">
				<div className="dropdown word-1">
					<input list="search" type="text" onChange={ this.searchUpdate } className="form-control input-lg dropdown-toggle z-depth-2" placeholder="Name or ID" data-toggle="dropdown"/>
					<ul className="dropdown-menu z-depth-2" style = {{ "minWidth":"100%","overflowY":"scroll","height":"115px" }}>
						{ showDropdownSearch }
					</ul>
				</div>
				<div className="row mgt5" >
					{ showSelectSection }
				</div>
				<table className="table table-hover table-courses table-responsive z-depth-2 mgt20">
					<thead>
						<tr>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">ID</th>
							<th className="col-md-5 col-xs-5 col-sm-5 col-lg-5">Name</th>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">Teacher</th>
							<th className="col-md-1 col-xs-1 col-sm-1 col-lg-1"></th>
							<th className="col-md-1 col-xs-1 col-sm-1 col-lg-1"></th>
							<th className="col-md-1 col-xs-1 col-sm-1 col-lg-1"></th>
						</tr>
					</thead>
					<tbody>
						{ showdataSubject }
					</tbody>
				</table>
				{ alertExam && <AlertExam/>}
				{ alertStudy && <AlertStudy/>}
				<button className="btn btn-info" onClick={ this.getBack } >นำกลับมา</button>
				<center><h3>Credits : <span id="credits"> { credit } </span></h3></center>
				<StudyTable 
					boxdataMon = { subjectboxMon }
					boxdataTue = { subjectboxTue }
					boxdataWed = { subjectboxWed }
					boxdataThe = { subjectboxThe }
					boxdataFri = { subjectboxFri }
					boxdataSat = { subjectboxSat } >
					<div className="index_header">
						<div className="index_firstHeader"></div>
						{ daybox }
					</div>
				</StudyTable>
				<ExamTable dayExambox = { dayExambox } dataarray = { examarrayMid } title={ 'ExamMidterm Schudule' }/>
				<ExamTable dayExambox = { dayExambox } dataarray = { examarrayFinal } title={ 'FinalMidterm Schudule'}/>
				<button type="button" onClick={ ()=> gothree(
					examarrayMid,
					examarrayFinal,
					allselect,
					credit,
					subjectboxMon,
					subjectboxTue,
					subjectboxWed,
					subjectboxThe,
					subjectboxFri,
					subjectboxSat,
					dayExambox,
					daybox
				)} className="btn btn-Blue btn-lg export" id="goThree">Export</button>
			</div>
		)
	}
}

export default Pagetwo