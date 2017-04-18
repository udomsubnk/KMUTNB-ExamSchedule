import React from'react'
import Pagetree from'./Pagethree'

import SubjectSearchItem from'../components/SubjectSearchItem'
import SectionListItem from '../components/SectionListItem'
import { Daybox,Hiddenbox } from '../components/Box'
import SelectSubjectItem from '../components/SelectSubjectItem'

import { findNameFormCourseID } from '../api/subject'
import { findSection } from '../api/section'
import { day } from '../api/day'

import ScheduleTable from '../containers/ScheduleTable'

class Pagetwo extends React.Component{

	constructor(props){
		super(props)
		this.state={
			val:'',
			subject:[],
			SearchList:[],
			selectSection:[],
			specialSection:[],
			arraybox:[],
			dataSubject:[]
		}
		
		this.searchUpdate = this.searchUpdate.bind(this)
		this.selectCourse = this.selectCourse.bind(this)
		this.addSection = this.addSection.bind(this)
		this.checkTime = this.checkTime.bind(this)
		this.removeListSection = this.removeListSection.bind(this)
	}
	
	componentDidMount(){
		const { arraybox,dataSubject } = this.state
		const { dataPageOne } = this.props
		fetch(`http://localhost:3000/subject`)
		.then(res=> res.json())
		.then( subject =>{
			this.setState({
				subject: subject
			})
		})
		for(var i=0;i<24;i++){
			let itembox = {
				id:i,
				status:false,
				sectionId:''
			}
			arraybox.push(itembox)
		}
		this.setState({
			arraybox:arraybox,
			dataSubject:dataPageOne
		})
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
		if(val=='')
			SearchList=[]
		else{
			SearchList = subject.filter(
				(subject) =>{
					return subject.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
				}
			)
		}
		this.setState({
			val:val,
			SearchList:SearchList
		})
	}

  	checkTime(data){
		let { arraybox } = this.state
		let day = data.day
		if(data.time.length == 10){
			var timeOpen = data.time.substring(0,1) + ':' + data.time.substring(2,4)
			var timeClose = data.time.substring(5,7) + ':' + data.time.substring(8,10)	
		}else{
			var timeOpen = data.time.substring(0,2) + ':' + data.time.substring(3,5)
			var timeClose = data.time.substring(6,8) + ':' + data.time.substring(9,11)
		}
		console.log(timeOpen,timeClose,day)
		if(day=='M'){
			if(timeOpen=='10:00' && timeClose=='12:00'){
				console.log('ok')
				arraybox[0].status = true
				arraybox[0].sectionId = data.section_id
				
				
				this.setState({
					arraybox:arraybox
				})
			}
		}
	}
	
	addSection(data) {
		const { dataSubject } = this.state
		dataSubject.push(data)
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
		const { dataSubject } = this.state
		const id = data.section_id
		let obj = dataSubject.find(function(e){
			return id === e.section_id
		})
		let x = dataSubject.indexOf(obj)
		dataSubject.splice(x,1)
		this.setState({
			dataSubject:dataSubject
		})

	}
	render() {
		const { gothree,data } = this.props
		const { subject,SearchList,specialSection,arraybox,dataSubject } = this.state 
		const showDropdownSearch = SearchList.map( (data) =>
			<li className="drop-down" onClick={ this.selectCourse.bind( null,data.course_id ) }>
				<SubjectSearchItem key={ data.course_id } data={ data }/>
			</li>
		)
		const showSelectSection = specialSection.map( (data) =>{
			return (
				<div onClick={ this.addSection.bind(null,data) } >
					<SectionListItem key={ data.section_id } sectionName={ data }/>
				</div>
			)
		})
		const daybox = day.map( (data)=>
			<Daybox key={ data.id } time={ data.time }/>
		)
		const subjectbox =  arraybox.map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		const showdataSubject = dataSubject.map((data)=>
			<SelectSubjectItem key={ data.section_id} data= { data } checkTimeClick = { this.checkTime } removeListSectionClick = { this.removeListSection }/>
		)
		return (
			<div className="container">
				<div className="dropdown">
					<input list="search" type="text" onChange={ this.searchUpdate } className="form-control input-lg dropdown-toggle" placeholder="Name or ID" data-toggle="dropdown"/>
					<ul className="dropdown-menu" style = {{ "min-width":"100%","overflow-y":"scroll","height":"115px" }}>
						{ showDropdownSearch }
					</ul>
				</div>
				<div className="row mgt5" >
					{ showSelectSection }
				</div>
				<table className="table table-hover table-courses table-responsive">
					<thead>
						<tr>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">ID</th>
							<th className="col-md-6 col-xs-6 col-sm-6 col-lg-6">Name</th>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">Teacher</th>
							<th className="col-md-1 col-xs-1 col-sm-1 col-lg-1"></th>
							<th className="col-md-1 col-xs-1 col-sm-1 col-lg-1"></th>
						</tr>
					</thead>
					<tbody>
						{ showdataSubject }
					</tbody>
				</table>
				<center><h3>Credits : <span id="credits"> 0 </span></h3></center>
				<center><h4 className="mgt20"> Study Schudule </h4></center>
				<ScheduleTable boxdata = { subjectbox } >
					<div className="index_header">
						<div className="index_firstHeader"></div>
						{ daybox }
					</div>
				</ScheduleTable>
				<button type="button" onClick={ ()=> gothree()} className="btn btn-primary btn-lg export">Export</button>
			</div>
		)
	}
}

export default Pagetwo