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
      ReplyPagethree:false
    }
    this.goPagetwo = this.goPagetwo.bind(this)
    this.goPagethree = this.goPagethree.bind(this)
  }

  goPagetwo(){
    let reply = true
    const { 
      ReplyPageone,
      ReplyPagetwo,
      ReplyPagethree
    } = this.state
    this.setState ({
      ReplyPageone:false,
      ReplyPagetwo:true,
      ReplyPagethree:false
    })
    
    
  }

  goPagethree(){
    const reply=true;
    const { 
      ReplyPageone,
      ReplyPagetwo,
      ReplyPagethree
    } = this.state
    this.setState ({
        ReplyPageone:false,
        ReplyPagetwo:false,
        ReplyPagethree:true
    })
  }

  render(){
    const { 
      ReplyPageone,
      ReplyPagetwo,
      ReplyPagethree
    } = this.state
    return (
      <div>
        { ReplyPageone && <Pageone gotwo={ this.goPagetwo } /> }
        { ReplyPagetwo && <Pagetwo gothree={ this.goPagethree }/> }
        { ReplyPagethree && <Pagethree/> }
      </div>
    )
  }
}
export default Main;
