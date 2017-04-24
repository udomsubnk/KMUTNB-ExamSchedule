import React,{Component} from'react'

class SubjectSearchItem extends Component{
  render(){
      const { selectCourse,data} = this.props
      return(
          <li className="list-selected" onClick={ ()=>selectCourse(data.course_id) }>
              <a>{ data.course_id } - { data.name }</a>  
          </li>
      )
  }
}

export default SubjectSearchItem