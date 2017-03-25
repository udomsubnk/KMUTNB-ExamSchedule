import React from'react'
import { ListChildren,ListMother } from './components/ListChildren'
class Main extends React.Component{

  render(){

    return(
      <div>
        <ListMother>
          <ListChildren/>
          <ListChildren/>
        </ListMother>
      </div>

    )
  }
}
export default Main;
