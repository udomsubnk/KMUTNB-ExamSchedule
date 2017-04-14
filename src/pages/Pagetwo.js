import React from'react'
import Pagetree from'./Pagethree'
import SubjectSearchItem from'../components/SubjectSearchItem'
import {findSection} from '../api/section'
import DisplaySectionItem from '../components/DisplaySectionItem'
import { Middlebox,Daybox,Hiddenbox } from '../components/Box'
import { day } from '../api/day'
class Pagetwo extends React.Component{

	constructor(){
		super()
		this.state={
			val:'',
			subject:[],
			ShowData:[],
			selectSection:[],
			specialSection:[],
			arraybox:[]
		}
		this.searchUpdate = this.searchUpdate.bind(this)
		this.selectCourse = this.selectCourse.bind(this)
		this.clickShow = this.clickShow.bind(this)
		this.parseText = this.parseText.bind(this)
  	}

	selectCourse(id){
		const {specialSection } = this.state
		const x = findSection(id)
		this.setState({
			specialSection:x
		})
	}

  	componentDidMount(){
		const { arraybox } = this.state
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
				subject:''
			}
			arraybox.push(itembox)
		}
		this.setState({
			arraybox:arraybox
		})
	}

  	searchUpdate(e){
		let { val,ShowData,subject } = this.state
		val = e.target.value
		if(val=='')
			ShowData=[]
		else{
			ShowData = subject.filter(
				(subject) =>{
					return subject.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
				}
			)
		}
		this.setState({
			val:val,
			ShowData:ShowData
		})
	}

  	parseText(data){
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
			if(timeOpen=='8:00' && timeClose=='10:00'){
				console.log('ok')
				arraybox[0].status = true
				arraybox[0].subject = data.course_id
				
				
				this.setState({
					arraybox:arraybox
				})
			}
		}
		if(day=='F'){
			if(timeOpen=='10:00' && timeClose=='12:00'){
				console.log('ok')
				arraybox[0].status = false
				arraybox[0].subject = ''
				
				this.setState({
					arraybox:arraybox
				})
			}
		}
	}

	clickShow(data) {
		this.parseText(data)
	}

  	render() {
		const { 
			gothree,
			data 
		} = this.props
		const { 
			subject,
			ShowData,
			specialSection,
			arraybox 
		} = this.state 
		
		const showDropdownSearch = ShowData.map( (data) =>
			<div onClick={ this.selectCourse.bind( null,data.course_id ) }>
				<div key={ data.course_id } >{ data.course_id } - { data.name }</div>
			</div>
		)
		
		const showSelectSection = specialSection.map( (data) =>
			<div onClick={ this.clickShow.bind(null,data) } >
				<DisplaySectionItem sectionName={ data }/>
			</div>
		)
		const daybox = day.map( (data)=>
			<Daybox key={ data.id } time={ data.time }/>
		)
		const subjectbox =  arraybox.map( (data) =>
			<Hiddenbox key={ data.id } data={data}/>
		)
		return (
			<div className="container">
				
				
				<div className="input-group zzz">
					<input list="search" type="text" onChange={ this.searchUpdate } className="form-control input-lg xxx" placeholder="Name or ID"/>
					{ showDropdownSearch }
					<br/>
					<span className="input-group-btn">
						<button className="btn btn-info btn-md btn-lg btn2" type="button">Search</button>
					</span>
				</div>
				{ showSelectSection }
				<table className="table table-hover table-courses table-responsive">
					<thead>
						<tr>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">ID</th>
							<th className="col-md-6 col-xs-6 col-sm-6 col-lg-6">Name</th>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">Teacher</th>
							<th className="col-md-2 col-xs-2 col-sm-2 col-lg-2">#</th>
						</tr>
					</thead>
				</table>
				<center><h3>Credits : <span id="credits"> 0 </span></h3></center>
				<center><h4 className="mgt20"> Study Schudule </h4></center>
				<div className="index_container">
					<div className="table-schdule">
						<div className="index_header">
							<div className="index_firstHeader"></div>
							{ daybox }
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#F3DF12", "height": "40px" }}>Mon</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#E447B1", "height": "40px" }}>Tue</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#11E454", "height": "40px" }}>Wed</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#E4830E", "height": "40px" }}>Thu</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#3083E4", "height": "40px" }}>Fri</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
						<div className="index_day">
							<div className="day_head" style={{ "color": "#7F14C2", "height": "40px" }}>Sat</div>
							<div className="row_row">
								{ subjectbox }
							</div>
						</div>
					</div>
				</div>
				<button type="button" onClick={ ()=> gothree()} className="btn btn-primary btn-lg export">Export</button>
			</div>
		)
	}
}

export default Pagetwo