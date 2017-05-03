import React,{ Component } from'react'
import ExamTable from '../containers/ExamTable'
import StudyTable from '../containers/StudyTable'
import { findSectionFromSection_id } from '../api/section'
import { findDataExam } from '../api/exam'

class Pagethree extends Component {
  constructor() {
    super()
    this.state = {
      exportExamArray:[]
    }
    this.exportMobile = this.exportMobile.bind(this)
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { tableStudy } = this.props
    var myUrl = '/finish?'
    // finish?id[0]=1020&id[1]=2020
    for(var i in tableStudy){
      myUrl+= 'id['+i+']='+tableStudy[i]
      if(i!=tableStudy.length-1)
        myUrl+="&"
    }
    window.history.pushState(null, null,myUrl);
  }
  
  exportMobile(tableStudy) {
    var examArray = [];
    for(var i=0;i<tableStudy.length;i++){
      if(findDataExam(findSectionFromSection_id(tableStudy[i]).course_id)!=undefined)
        examArray.push(findDataExam(findSectionFromSection_id(tableStudy[i]).course_id))
    }
    var data = {
      exam : examArray
    }
    $.post('/exportexam',data,(res) => {
      if(res=="success")
        setTimeout(()=>{ window.location="/getFile"; }, 3000);
    });
  }
 
  render() {
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
   
    return (
      <div className="container MoveChangePage">
        <button onClick={ ()=> window.location = window.location.href }>แก้ไข</button>
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
        <button type="button" onClick={ this.exportMobile.bind(null,tableStudy) } className="btn btn-primary btn-lg export">Export to calendar</button>
      </div>
    )
  }
}

export default Pagethree;
