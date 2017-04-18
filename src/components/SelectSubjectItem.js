import React, { Component } from 'react';

class SelectSubjectItem extends Component {
    render() {
        const { data,checkTimeClick,removeListSectionClick } = this.props
        return (
           <tr>
				<td className="col-md-2 col-xs-2 col-sm-2 col-lg-2">{ data.course_id }</td>
				<td className="col-md-6 col-xs-6 col-sm-6 col-lg-6">{ data.course_id }</td>
				<td className="col-md-2 col-xs-2 col-sm-2 col-lg-2">{ data.prof }</td>
				<td className="col-md-1 col-xs-1 col-sm-1 col-lg-1"><button className="btn btn-success" type="button" onClick={ ()=>checkTimeClick(data) }>Add</button></td>
				<td className="col-md-1 col-xs-1 col-sm-1 col-lg-1"><button className="btn btn-danger" onClick={ ()=>removeListSectionClick(data) }>X</button></td>
			</tr> 
        );
    }
}

export default SelectSubjectItem;