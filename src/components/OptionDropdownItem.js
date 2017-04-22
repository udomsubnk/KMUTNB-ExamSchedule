import React from 'react'

const OptionDropdownItem = ({ currentNameprops })=>{
  return (
    <option value={ currentNameprops.curr_id }>{ currentNameprops.curr_name }</option>
  )
}

export default OptionDropdownItem