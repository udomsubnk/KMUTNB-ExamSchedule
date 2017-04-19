import React from'react'
import Pageone from './pages/Pageone'
import Pagetwo from './pages/Pagetwo'
import Pagethree from './pages/Pagethree'
import Header from './Header'
import {ProgressOne,ProgressTwo,ProgressThree} from './components/Progress'
class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      ReplyPageone:true,
      ReplyPagetwo:false,
      ReplyPagethree:false,
      dataFormPageOne:{},
      tableFinal:[],
      tableMid:[],
      tableStudy:[],
      creditNum:0,
      subjectboxMon:{}, 
      subjectboxTue:{}, 
      subjectboxWed:{}, 
      subjectboxThe:{}, 
      subjectboxFri:{},
      subjectboxSat:{},
      dayExambox:{},
      daybox:{}
    }
    this.goPagetwo = this.goPagetwo.bind(this)
    this.goPagethree = this.goPagethree.bind(this)
  }

  goPagetwo(courses){
    this.setState ({
      ReplyPageone:false,
      ReplyPagetwo:true,
      ReplyPagethree:false,
      dataFormPageOne:courses
    })
  }

  goPagethree(examarrayMid,examarrayFinal,allselect,credit,
      subjectboxMon, 
      subjectboxTue, 
      subjectboxWed, 
      subjectboxThe, 
      subjectboxFri,
      subjectboxSat,
      dayExambox,
      daybox){
    this.setState ({
        ReplyPageone:false,
        ReplyPagetwo:false,
        ReplyPagethree:true,
        tableFinal:examarrayFinal,
        tableMid:examarrayMid,
        tableStudy:allselect,
        creditNum:credit,
        subjectboxMon:subjectboxMon,
        subjectboxTue:subjectboxTue, 
        subjectboxWed:subjectboxWed, 
        subjectboxThe:subjectboxThe, 
        subjectboxFri:subjectboxFri,
        subjectboxSat:subjectboxSat,
        dayExambox:dayExambox,
        daybox:daybox
    })
  }

  render(){
    const { 
      ReplyPageone,
      ReplyPagetwo,
      ReplyPagethree,
      dataFormPageOne, 
      tableFinal,
      tableMid,
      tableStudy,
      creditNum,
      subjectboxMon,
      subjectboxTue, 
      subjectboxWed, 
      subjectboxThe, 
      subjectboxFri,
      subjectboxSat,
      dayExambox,
      daybox
    } = this.state
    return (
      <div>
        { ReplyPageone && <ProgressOne/> }
        { ReplyPagetwo && <ProgressTwo/> }
        { ReplyPagethree && <ProgressThree/> }
        { ReplyPageone && <Pageone gotwo={ this.goPagetwo } /> }
        { ReplyPagetwo && <Pagetwo gothree={ this.goPagethree } dataPageOne = { dataFormPageOne }/> }
        { ReplyPagethree && <Pagethree 
                                tableFinal = { tableFinal } 
                                tableMid={ tableMid } 
                                tableStudy = { tableStudy } 
                                creditNum = { creditNum }
                                subjectboxMon = { subjectboxMon }
                                subjectboxTue = { subjectboxTue }
                                subjectboxWed = { subjectboxWed }
                                subjectboxThe = { subjectboxThe }
                                subjectboxFri = { subjectboxFri }
                                subjectboxSat = { subjectboxSat }
                                dayExambox = { dayExambox }
                                daybox = { daybox }
                            />}
      </div>
    )
  }
}

export default Main;
