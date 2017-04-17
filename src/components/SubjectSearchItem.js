import React from'react'

const SubjectSearchItem = ({ data })=>{
    return(
      <p>{ data.course_id } - { data.name }</p>  
    )
}

export default SubjectSearchItem