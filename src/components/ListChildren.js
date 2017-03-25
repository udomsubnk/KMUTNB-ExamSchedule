import React from 'react'
export class ListChildren extends React.Component{
  render(){
    return(
      <div>
        <h1>Children</h1>
      </div>
    )
  }
}
export class ListMother extends React.Component{
  render(){
    return(
      <div>
        <h1>MotherFucker</h1>
        {this.props.children}
      </div>

    )
  }
}
