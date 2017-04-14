import React from 'react'

const DisplaySectionItem = ({ sectionName })=>{
    return (
      <div className="col-xs-2">
        <div className="card text-center secCard" >
          <div className="card-block">
            <p className="card-title" >{ sectionName.type }.{ sectionName.section } { sectionName.prof }</p>
            <p className="card-subtitle mb-2 ">{ sectionName.day }</p>
            <p className="card-text" >{ sectionName.time }</p>
          </div>
        </div>
      </div>
    )
}

export default DisplaySectionItem