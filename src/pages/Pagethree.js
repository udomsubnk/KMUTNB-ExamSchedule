import React from'react'
import ExamTable from '../containers/ExamTable'
import StudyTable from '../containers/StudyTable'
import { findSectionFromSection_id } from '../api/section'
import { findDataExam } from '../api/exam'

class Pagethree extends React.Component{
  constructor(){
    super()
    this.state = {
      exportExamArray:[]
    }
    this.exportMobile = this.exportMobile.bind(this)
  }
  
  exportMobile(tableStudy){
    var examArray = [];
    for(var i=0;i<tableStudy.length;i++){
      console.log(findDataExam(findSectionFromSection_id(tableStudy[i]).course_id))
      if(findDataExam(findSectionFromSection_id(tableStudy[i]).course_id)!=undefined)
        examArray.push(findDataExam(findSectionFromSection_id(tableStudy[i]).course_id))
    }
    fetch('/exportExam', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(examArray)
    }).then((res)=>{
      if(res=="succes") window.location="/getFile"
    })
  }
  render(){
    const { 
      tableStudy,
      tableFinal,
      tableMid,
      creditNum,
      subjectboxMon,
      subjectboxTue, 
      subjectboxWed, 
      subjectboxThe, 
      subjectboxFri,
      subjectboxSat,
      dayExambox,
      daybox,
    } = this.props
    
    return(
      <div className="container">
        <center><h1 className="zzz">Summary</h1></center>
        <center><h3>Credits : <span id="credits">{ creditNum }</span></h3></center>
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
        <ExamTable dayExambox = { dayExambox } dataarray = { tableMid } title={ 'ExamMidterm Schudule' }/>
        <ExamTable dayExambox = { dayExambox } dataarray = { tableFinal } title={ 'FinalMidterm Schudule'}/>
        <input type="text" className="form-control" placeholder="https://www.precourse.com/?ids[0]=586ffaf2f69160005187e661&ids[1]=586ffaf2f69160005187e663" id="url"/>
        
          <button type="button" onClick={ this.exportMobile.bind(null,tableStudy) } className="btn btn-primary btn-lg export">Export to calendar</button>
        
      </div>
    )
  }
}
export default Pagethree;
