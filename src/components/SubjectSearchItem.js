import React from'react'

const SubjectSearchItem = ({ data })=>{
    return(
      <button type="button" className="list-group-item" >{ data.course_id } - { data.name }</button>  
    )
}

export default SubjectSearchItem