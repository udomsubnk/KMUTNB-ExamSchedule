import React from'react'
class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      val:0,
    }
    this.update = this.update.bind(this)
  }
  update(){
    let {val} = this.state;
    val+=1
    this.setState({
      val:val
    })
  }
  render(){
    let {val} = this.state
    return(
      <div>Test React
        {val}
        <button onClick={this.update}>click</button>
      </div>
    )
  }
}
export default Main;
