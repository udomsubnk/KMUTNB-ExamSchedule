import React from'react'
import ExamTable from '../containers/ExamTable'
import StudyTable from '../containers/StudyTable'

class Pagethree extends React.Component{

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
        <a href="/file/5704062616518122559">
          <button type="button" className="btn btn-primary btn-lg export">Export to calendar</button>
        </a>
      </div>




    )
  }
}
export default Pagethree;
