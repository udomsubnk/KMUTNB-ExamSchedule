import React from'react'
import Pageone from './pages/Pageone'
import Pagetwo from './pages/Pagetwo'
import Pagethree from './pages/Pagethree'
import Header from './Header'

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
      creditNum:0
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

  goPagethree(examarrayMid,examarrayFinal,allselect,credit){
    this.setState ({
        ReplyPageone:false,
        ReplyPagetwo:false,
        ReplyPagethree:true,
        tableFinal:examarrayFinal,
        tableMid:examarrayMid,
        tableStudy:allselect,
        creditNum:credit
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
      creditNum
    } = this.state
    return (
      <div>
        { ReplyPageone && <Pageone gotwo={ this.goPagetwo } /> }
        { ReplyPagetwo && <Pagetwo gothree={ this.goPagethree } dataPageOne = { dataFormPageOne }/> }
        { ReplyPagethree && <Pagethree tableFinal = { tableFinal } tableMid={ tableMid } tableStudy = { tableStudy } creditNum = { creditNum }/> }
      </div>
    )
  }
}

export default Main;
