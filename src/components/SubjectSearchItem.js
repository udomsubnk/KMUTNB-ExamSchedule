import React from'react'

const SubjectSearchItem = ({ data })=>{
    return(
      <a>{ data.course_id } - { data.name }</a>  
    )
}

export default SubjectSearchItem