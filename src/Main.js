import React from'react'
import Pageone from './pages/Pageone'
import Pagetwo from './pages/Pagetwo'
import Pagethree from './pages/Pagethree'
import Header from './Header'
import {ProgressOne,ProgressTwo,ProgressThree} from './components/Progress'
import {findSectionFromSection_id} from './api/section'

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
  componentWillMount(){
    var url = window.location.href;
    if(url.indexOf("finish?")!=-1){
      // http://localhost:3000/finish? id[0],2020,id[1],220 
      var xx = url.split("finish?").pop().split(/=|&/g)
      var data = []
      for(var i in xx){
        if(xx[i][0]!='i')
          data.push(xx[i])
      }
      for(i in data){
        data[i]=findSectionFromSection_id(data[i])
      }
      this.setState({
        dataFormPageOne:data,
        ReplyPageone:false,
        ReplyPagetwo:true,
        ReplyPagethree:false
      })
    }
     
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
